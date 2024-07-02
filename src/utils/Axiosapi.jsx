import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY
    }
})