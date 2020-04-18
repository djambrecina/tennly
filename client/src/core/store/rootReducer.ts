import { combineReducers } from 'redux';

import playersReducer from './players/reducers';

const rootReducer = combineReducers({
  players: playersReducer
});

export default rootReducer;
