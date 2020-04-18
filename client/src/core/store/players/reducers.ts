import mapKeys from 'lodash/mapKeys';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { fetchPlayers } from './actions';
import {
  AllIdsState,
  ByIdState,
  PlayersActions,
} from './types';

const allIds = createReducer<AllIdsState, PlayersActions>([])
  .handleAction(fetchPlayers.success, (_, action) => action.payload.map(p => p.id));

const byId = createReducer<ByIdState, PlayersActions>({})
  .handleAction(fetchPlayers.success, (_, action) => mapKeys(action.payload, p => p.id));

const reducers = combineReducers({
  allIds,
  byId
});

export default reducers;
