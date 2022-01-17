import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_DB_URL}/api-auth/`,
  headers: {
    Authorization: 'JWT ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default axiosInstance;
