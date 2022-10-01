import axios from 'axios';

export const getFng = async () => (await axios.get(`http://localhost:8080/fetch-fng`))