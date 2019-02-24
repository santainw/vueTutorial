import axios from 'axios';
const API_URL = 'http://128.199.167.160:3000';
export class APIService{

constructor(){}

getData() {
    const url = `${API_URL}/api/v1/users`;
    return axios.get(url).then(response => response.data);
}

}

