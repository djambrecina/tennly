import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

import playersReducer from './players/reducers';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  players: playersReducer
});

export default rootReducer;
