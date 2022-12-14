import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

// Run the saga
sagaMiddleware.run(rootSaga);
