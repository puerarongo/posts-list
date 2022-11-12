import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/staticmap?';
const API_KEY = '';
const req1 = '47.735549'
const req2 = '-94.548447'

const mapAPI = async () => {
    const req = await axios
        .get(`${BASE_URL}key=&center=${req1},${req2}&zoom=12&size=500x400`);
    return req;
};

export default mapAPI;