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

export const searchUsers = async ({ username, location, minRepos }, page = 1) => {
  try {
    const queryParams = [
      username && `in:login ${username}`,
      location && `location:${location}`,
      minRepos && `repos:>${minRepos}`
    ].filter(Boolean).join('+');

    const response = await api.get('/search/users', {
      params: {
        q: queryParams,
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

export const getUserDetails = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'User not found');
  }
};