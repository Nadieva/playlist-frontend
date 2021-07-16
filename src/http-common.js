import axios from 'axios';
import { API_URL } from './Constant';

export default axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-type': 'application/json',
  },
});
