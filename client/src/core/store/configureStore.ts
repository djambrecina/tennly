import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import {
  applyMiddleware,
  createStore,
  Store
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { State } from 'types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(history: History): Store<State> {
  const composeEnhancers = composeWithDevTools({
    serialize: true
  });
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    {},
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
