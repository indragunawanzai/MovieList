import { movies } from "../types";

export const getDataListMovie = () => {
    return {
        type: movies.GETLISTMOVIE,
    }
}

export const getDataListMovieSuccess = (data) => {
    return {
        type: movies.GETLISTMOVIE_SUCCESS,
        payload: data
    }
}

export const getDataListMovieFailed = (error) => {
    return {
        type: movies.GETLISTMOVIE_FAILED,
        payload: error
    }
}