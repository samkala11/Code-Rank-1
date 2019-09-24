import axios from 'axios';

export const getProblem = id => {
    return axios.get(`/api/problems/${id}`)
}