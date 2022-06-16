export const API_BASE_URL = 'https://market-final-project.herokuapp.com';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// GET_API
export const API_LOGIN = getApiUrl('/auth/login');

export const API_REGISTER = getApiUrl('/auth/register');
