import axios from 'axios';
// eslint-disable-next-line
let baseURLDev = 'http://localhost:4000/';
// eslint-disable-next-line
let baseURLProduction = 'https://rocky-bayou-34788.herokuapp.com/'

const instance = axios.create({
  baseURL: baseURLProduction
});

export default instance;