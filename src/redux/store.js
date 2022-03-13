// import { createStore, applyMiddleware } from 'redux'

// import thunk from 'redux-thunk'

// const store = createStore(reducers, applyMiddleware(thunk));

// export default store

import { applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// import rootSaga from './sagas/index';
// import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware),
)
// const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store };