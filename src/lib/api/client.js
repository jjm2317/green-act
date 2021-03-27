import axios from '../../../node_modules/axios';

const client = axios.create();

client.defaults.baseURL = 'http://3.34.157.240:4000';
export default client;
