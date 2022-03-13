import {all} from 'redux-saga/effects';
import moviesSaga from './movie/movie';


export default function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}
