import { detailMovies } from "../../action/types"

const initialState = {
    loading: false,
    movieDetail: {},
    errors: false,
}

const detailMovie = (state = initialState, action) => {
    switch (action.type) {
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

export default detailMovie;