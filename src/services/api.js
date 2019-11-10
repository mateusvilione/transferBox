import axios from 'axios';

const api = axios.create({
    baseURL: 'http://skaibox-api.herokuapp.com/',
});

export default api;