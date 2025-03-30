// src/services/githubService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: import.meta.env.VITE_GITHUB_TOKEN 
      ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      : ''
  }
});

export const searchUsers = async (params, page = 1) => {
  try {
    // Explicit URL construction with search endpoint
    const baseUrl = 'https://api.github.com/search/users?q=';
    const query = [
      params.username && `user:${params.username}`,
      params.location && `location:${params.location}`,
      params.minRepos && `repos:>${params.minRepos}`
    ].filter(Boolean).join('+');

    const fullUrl = `${baseUrl}${encodeURIComponent(query)}`;
    
    const response = await api.get(fullUrl, {
      params: {
        page,
        per_page: 10
      }
    });

    return {
      users: response.data.items,
      totalCount: response.data.total_count,
      hasMore: response.data.items.length > 0 && 
              (page * 10) < response.data.total_count
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Search failed');
  }
};