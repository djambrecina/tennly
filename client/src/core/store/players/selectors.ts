import { Player } from 'core/models/player';
import { createSelector } from 'reselect';
import { State } from 'types';

import {
  AllIdsState,
  ByIdState,
} from './types';

const getAllIds = (state: State): AllIdsState => state.players.allIds;

const getById = (state: State): ByIdState => state.players.byId;

export const getPlayers = createSelector(
  getById,
  getAllIds,
  (byId, allIds): Player[] => allIds.map(id => byId[id]),
);
