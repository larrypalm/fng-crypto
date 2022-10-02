import axios from 'axios';

export const getFng = async () => {
    // @todo remove hardcoded when domain is in place
    const url = process.env.REACT_APP_NODE_API_URL;
    return await axios.get(`${url}/api/fetch-fng`);
};