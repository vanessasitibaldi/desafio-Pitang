
import axios from 'axios';

const constant = axios.create({
  baseURL: 'https://api.github.com'
});

export default constant;
