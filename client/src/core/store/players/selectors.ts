import { createSelector } from 'reselect';
import { State } from 'types';

import { AllPlayersViewModel } from '../../../../../shared/viewModels/player';
import {
  AllIdsState,
  ByIdState
} from './types';

const getAllIds = (state: State): AllIdsState => state.players.allIds;

const getById = (state: State): ByIdState => state.players.byId;

export const getPlayers = createSelector(
  getById,
  getAllIds,
  (byId, allIds): AllPlayersViewModel[] => allIds.map(id => byId[id])
);
