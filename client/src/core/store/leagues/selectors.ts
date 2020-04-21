import { createSelector } from 'reselect';
import { State } from 'types';

import { FetchInfoState } from '../abstract/reducers/fetchInfo';
import { AllLeaguesViewModel } from '../../../../../shared/types/league';
import {
  AllIdsState,
  ByIdState
} from './types';

const getAllIds = (state: State): AllIdsState => state.leagues.allIds;

const getById = (state: State): ByIdState => state.leagues.byId;

export const getLeagues = createSelector(
  getById,
  getAllIds,
  (byId, allIds): AllLeaguesViewModel[] => allIds.map(id => byId[id])
);

export const getFetchLeaguesInfo = (state: State): FetchInfoState => (
  state.leagues.fetchLeaguesInfo
);
