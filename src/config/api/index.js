export const API_BASE_URL = 'https://market-final-project.herokuapp.com';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// AUTH
export const API_LOGIN = getApiUrl('/auth/login');

export const API_REGISTER = getApiUrl('/auth/register');

export const API_GET_PROFILE = getApiUrl('/auth/user');

export const API_PUT_PROFILE = getApiUrl('/auth/user');

// BUYER
export const API_GET_PRODUCT = getApiUrl('/buyer/product');

// SELLER
export const API_GET_CATEGORY = getApiUrl('/seller/category');
