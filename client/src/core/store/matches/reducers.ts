import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { fetchCreateMatchInfo } from './actions';
import {
  CreateMatchInfoState,
  MatchesActions
} from './types';

const CMI_DEFAULT: CreateMatchInfoState = {
  players: [],
  availableMatches: []
};
const createMatchInfo = createReducer<CreateMatchInfoState, MatchesActions>(CMI_DEFAULT)
  .handleAction(fetchCreateMatchInfo.success, (_, action) => action.payload);

const reducers = combineReducers({
  createMatchInfo
});

export default reducers;
