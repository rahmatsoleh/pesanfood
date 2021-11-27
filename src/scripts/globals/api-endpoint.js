import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  PICTURE_SM: (id) => `${CONFIG.PICTURE}/small/${id}`,
  PICTURE_MD: (id) => `${CONFIG.PICTURE}/medium/${id}`,
  PICTURE_LG: (id) => `${CONFIG.PICTURE}/large/${id}`,
};

export default API_ENDPOINT;