import { BASE_URL_API } from '@/constants';
import axios from 'axios';

export const API = axios.create({
  baseURL: `${BASE_URL_API}`
});
