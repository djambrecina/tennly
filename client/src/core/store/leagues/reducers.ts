import mapKeys from 'lodash/mapKeys';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import fetchInfo from '../abstract/reducers/fetchInfo';
import { fetchLeagues } from './actions';
import {
  AllIdsState,
  ByIdState,
  LeaguesActions
} from './types';

const allIds = createReducer<AllIdsState, LeaguesActions>([])
  .handleAction(fetchLeagues.success, (_, action) => action.payload.map(p => p.id));

const byId = createReducer<ByIdState, LeaguesActions>({})
  .handleAction(fetchLeagues.success, (_, action) => mapKeys(action.payload, p => p.id));

const reducers = combineReducers({
  allIds,
  byId,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchLeaguesInfo: fetchInfo(fetchLeagues as any)
});

export default reducers;
