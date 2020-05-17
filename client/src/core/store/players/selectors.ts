import { createSelector } from 'reselect';
import { AllPlayersViewModel } from 'tennly-shared';
import { State } from 'types';

import { FetchInfoState } from '../abstract/reducers/fetchInfo';
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

export const getFetchPlayersInfo = (state: State): FetchInfoState => state.players.fetchPlayersInfo;
