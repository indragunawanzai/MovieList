import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie'
const API_KEY = '1f34a3c17a535095aff3c499b2eaccc3'

export function apiGetListMovies(){
    return axios({
        method: 'GET',
        url: BASE_URL + `/157336/lists?api_key=${API_KEY}`
    })
}

export function apiGetDetailMovies(movie_id) {
    return axios({
        method: 'GET',
        url: BASE_URL + `/${movie_id}?api_key=${API_KEY}`
    })
    
}