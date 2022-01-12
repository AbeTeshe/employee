import axios from 'axios';

const BASE_URL = "https://employeeform-project.herokuapp.com/";

export const request = axios.create({
    baseURL: BASE_URL,
});