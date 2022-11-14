import axios from "axios";

const BASE_URL: string = 'https://maps.googleapis.com/maps/api/staticmap?';
const API_KEY: string = 'AIzaSyBox0CJWp8d_FFgUWC6tbnHqYFoftDIB78';
const req1 = '47.735549'
const req2 = '-94.548447'

const googleMapAPI = async () => {
    const req = await axios
        .get(`${BASE_URL}key=${API_KEY}&center=${req1},${req2}&zoom=12&size=500x400`);
    return req;
};

export default googleMapAPI;