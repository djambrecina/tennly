import { ActionType } from 'typesafe-actions';

import {
  AllLeaguesViewModel,
  LeagueDetailsViewModel
} from '../../../../../shared/types/league';
import * as leaguesActions from './actions';

export type AllIdsState = number[];

export type ByIdState = Record<number, AllLeaguesViewModel>;

export type DetailsState = LeagueDetailsViewModel;

export type LeaguesActions = ActionType<typeof leaguesActions>;
