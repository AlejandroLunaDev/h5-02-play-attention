/**
 * Base API client for making fetch requests
 * Use this with TanStack Query for API calls
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

/**
 * Makes a fetch request with the given options
 * @param {string} endpoint - The API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - The response data
 */
export async function fetchApi(endpoint, options = {}) {
  const url = `${API_URL}${
    endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  }`;

  const defaultHeaders = {
    'Content-Type': 'application/json'
  };

  // Add authorization header if token exists
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('auth-token') : null;
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  try {
    const response = await fetch(url, config);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();

      if (!response.ok) {
        throw {
          status: response.status,
          message: data.message || 'API error',
          data
        };
      }

      return data;
    } else {
      if (!response.ok) {
        throw { status: response.status, message: 'API error' };
      }

      return await response.text();
    }
  } catch (error) {
    // Enhance error with request details
    throw {
      ...error,
      endpoint,
      timestamp: new Date().toISOString()
    };
  }
}
