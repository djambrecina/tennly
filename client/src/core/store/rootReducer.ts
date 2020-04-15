import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer
});

export default rootReducer;
