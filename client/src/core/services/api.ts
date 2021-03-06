import axios from 'axios';

import { apiUrl } from 'config/settings';

const api = axios.create({
  baseURL: apiUrl
});

export default api;
