import axios from 'axios';

// https://sujeitoprogramador.com/r-api/?api=filmes

const apí = axios.create({
  baseURL: 'https://sujeitoprogramador.com/',
});

export default apí;
