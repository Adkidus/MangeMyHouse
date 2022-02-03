import axios from 'axios';
const instance = axios.create({
    // baseURL: 'http://localhost:5000/'
    baseURL: 'https://menagemyhome.sukces24.usermd.net/api/'
});
export default instance;