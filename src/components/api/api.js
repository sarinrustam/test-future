import axios from 'axios';
import { API_URL } from '../../utils/utils.js';

const TIMEOUT_DURATION = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    timeout: TIMEOUT_DURATION,
    withCredentials: false,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const {response} = error;
    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

