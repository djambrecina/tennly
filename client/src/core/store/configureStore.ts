import {
  applyMiddleware,
  createStore,
  DeepPartial,
  Store
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { State } from 'types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(
  initialState: DeepPartial<State> = {}
): Store<State> {
  const composeEnhancers = composeWithDevTools({
    serialize: true
  });
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
