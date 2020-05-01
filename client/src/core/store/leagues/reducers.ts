import mapKeys from 'lodash/mapKeys';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import fetchInfo from '../abstract/reducers/fetchInfo';
import {
  fetchLeagueDetails,
  fetchLeagues
} from './actions';
import {
  AllIdsState,
  ByIdState,
  DetailsState,
  LeaguesActions
} from './types';

const allIds = createReducer<AllIdsState, LeaguesActions>([])
  .handleAction(fetchLeagues.success, (_, action) => action.payload.map(p => p.id));

const byId = createReducer<ByIdState, LeaguesActions>({})
  .handleAction(fetchLeagues.success, (_, action) => mapKeys(action.payload, p => p.id));

const DETAILS_DEFAULT: DetailsState = {
  name: "",
  players: []
};
const details = createReducer<DetailsState, LeaguesActions>(DETAILS_DEFAULT)
  .handleAction(fetchLeagueDetails.success, (_, action) => action.payload);

const reducers = combineReducers({
  allIds,
  byId,
  details,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchLeaguesInfo: fetchInfo(fetchLeagues as any)
});

export default reducers;
