import { movies, detailMovies } from "../../action/types"

const initialState = {
    loading: false,
    data: [],
    errors: false,
    movieDetail: []
}

const movie = (state = initialState, action) => {
    switch (action.type) {
        case movies.GETLISTMOVIE:
            return {
                ...state,
                loading: true,
            }
        case movies.GETLISTMOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case movies.GETLISTMOVIE_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }

        case detailMovies.GETDETAILMOVIE:
            return {
                ...state,
                loading: true,
            }
        case detailMovies.GETDETAILMOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movieDetail: action.payload,
            }
        case detailMovies.GETDETAILMOVIE_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default movie;