import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yeey-b1022.firebaseio.com/'
});

export default instance;