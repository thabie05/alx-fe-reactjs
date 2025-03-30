import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY 
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : '',
  },
});

export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
};