import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000';

export const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
  },
  timeout: 10000,
});

export async function ensureCsrfCookie() {
  try {
    await axios.get(`${API_BASE_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
      timeout: 5000,
    });
  } catch (error) {
    console.error('🚨 CSRF Cookie fetch failed or timed out:', error);
    throw error;
  }
}
