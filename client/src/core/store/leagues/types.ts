import {
  AllLeaguesViewModel,
  LeagueDetailsViewModel
} from 'tennly-shared';
import { ActionType } from 'typesafe-actions';

import * as leaguesActions from './actions';

export type AllIdsState = number[];

export type ByIdState = Record<number, AllLeaguesViewModel>;

export type DetailsState = LeagueDetailsViewModel;

export type LeaguesActions = ActionType<typeof leaguesActions>;
