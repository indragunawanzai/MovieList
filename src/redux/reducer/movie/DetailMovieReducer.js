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
                errors: false,
            }
        case detailMovies.GETDETAILMOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: false,
                movieDetail: action.payload,
            }
        case detailMovies.GETDETAILMOVIE_FAILED:
            return {
                ...state,
                loading: false,
                errors: true,
            }
        default:
            return state
    }
}

export default detailMovie;