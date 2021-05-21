import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://3.37.75.87:3000';
export default client;
