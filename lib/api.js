export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export const getApiUrl = (path) => {
  return `${API_BASE_URL}${path}`;
}; 