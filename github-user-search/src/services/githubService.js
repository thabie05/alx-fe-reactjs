import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: import.meta.env.VITE_GITHUB_TOKEN 
      ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      : ''
  }
})

export const fetchUserData = async (username) => {
  try {
    return await api.get(`/users/${username}`)
  } catch (error) {
    throw error.response?.data?.message || 'User not found'
  }
}

export const searchUsers = async (params, page = 1) => {
  const query = [
    params.username && `in:login ${params.username}`,
    params.location && `location:${params.location}`,
    params.repos && `repos:>${params.repos}`
  ].filter(Boolean).join('+')

  try {
    return await api.get('/search/users', {
      params: {
        q: query,
        page,
        per_page: 10
      }
    })
  } catch (error) {
    throw error.response?.data?.message || 'Search failed'
  }
}