import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import {
  combineReducers,
  Reducer
} from 'redux';
import { reducer as formReducer } from 'redux-form';

import leaguesReducer from './leagues/reducers';
import playersReducer from './players/reducers';

const rootReducer = (history: History): Reducer => combineReducers({
  form: formReducer,
  leagues: leaguesReducer,
  players: playersReducer,
  router: connectRouter(history)
});

export default rootReducer;
