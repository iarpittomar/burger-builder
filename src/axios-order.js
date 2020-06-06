import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b5763.firebaseio.com/'
});

export default instance;