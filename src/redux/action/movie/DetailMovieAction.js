import { detailMovies } from "../types";

export const getDataDetailMovie = (data) => {
    return {
        type: detailMovies.GETDETAILMOVIE,
        payload: data
    }
}

export const getDataDetailMovieSuccess = (data) => {
    return {
        type: detailMovies.GETDETAILMOVIE_SUCCESS,
        payload: data
    }
}

export const getDataDetailMovieFailed = (error) => {
    return {
        type: detailMovies.GETDETAILMOVIE_FAILED,
        payload: error
    }
}