import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import {
  combineReducers,
  Reducer
} from 'redux';
import { reducer as formReducer } from 'redux-form';

import playersReducer from './players/reducers';

const rootReducer = (history: History): Reducer => combineReducers({
  form: formReducer,
  players: playersReducer,
  router: connectRouter(history)
});

export default rootReducer;
