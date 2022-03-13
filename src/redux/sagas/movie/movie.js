import { put, takeLatest, call } from "redux-saga/effects";
import { apiGetListMovies, apiGetDetailMovies } from "../../../apis/api";
import { getDataListMovieSuccess } from "../../action/movie/MovieAction"
import { getDataDetailMovieSuccess } from "../../action/movie/DetailMovieAction"
import { movies, detailMovies } from "../../action/types";

function * getListMovie() {
    try {
        const response = yield apiGetListMovies();
        yield put(getDataListMovieSuccess(response.data.results));
    }
    catch(err){
        console.log('error get movie',err)
    }
}

function * getDetailMovie(data) {
    try {
        const response = yield apiGetDetailMovies(data.payload);
        yield put(getDataDetailMovieSuccess(response.data));
    }
    catch(err){
        // yield put(getDataDetailMovieFailed(err));
        console.log('error get detail movie', JSON.stringify(err))
    }
}

export default function* movieSaga(){
    yield takeLatest(movies.GETLISTMOVIE, getListMovie);
    yield takeLatest(detailMovies.GETDETAILMOVIE, getDetailMovie);
}