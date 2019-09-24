import axios from 'axios';

export const getSolution = id => {
    return axios.get(`/api/solutions/problem/${id}`)
};

export const writeSolution = data => {
    return axios.post('/api/solutions/', data)
}