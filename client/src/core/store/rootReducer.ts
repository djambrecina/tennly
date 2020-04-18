import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import playersReducer from './players/reducers';

const rootReducer = combineReducers({
  form: formReducer,
  players: playersReducer
});

export default rootReducer;
