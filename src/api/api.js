import  axios from 'axios';

export const authAPI = {
    getUserData(login) {
        return axios.get(`https://api.github.com/users/${login}`)
    },
}