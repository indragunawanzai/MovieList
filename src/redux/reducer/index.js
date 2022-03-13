import { combineReducers } from "redux";
import MovieReducer from "./movie/MovieReducer";
import DetailMovieReducer from "./movie/DetailMovieReducer";

const rootReducer = combineReducers({
  MovieReducer,
  DetailMovieReducer,
})

export default rootReducer;