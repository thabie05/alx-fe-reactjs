import axios from 'axios';

const API_BASE = 'https://api.github.com/search/users';

export const searchUsers = async (params, page = 1) => {
  try {
    const query = [
      params.username && `in:login ${params.username}`,
      params.location && `location:${params.location}`,
      params.repos && `repos:>${params.repos}`
    ].filter(Boolean).join('+');

    const response = await axios.get(`${API_BASE}?q=${query}`, {
      params: {
        page,
        per_page: 10,
      },
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN 
          ? `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
          : '',
      },
    });

    return {
      users: response.data.items,
      totalCount: response.data.total_count,
      nextPage: page + 1,
      hasMore: response.data.items.length > 0 && 
               (page * 10) < response.data.total_count
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Search failed');
  }
};