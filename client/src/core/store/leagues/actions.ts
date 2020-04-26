import { createAsyncAction } from 'typesafe-actions';

import {
  AllLeaguesViewModel,
  CreateLeagueRequestBody,
  LeagueDetailsViewModel
} from '../../../../../shared/types/league';
import {
  CREATE_LEAGUE,
  CREATE_LEAGUE_SUCCESS,
  CREATE_LEAGUE_FAILURE,
  FETCH_LEAGUES,
  FETCH_LEAGUES_SUCCESS,
  FETCH_LEAGUES_FAILURE,
  FETCH_LEAGUE_DETAILS,
  FETCH_LEAGUE_DETAILS_SUCCESS,
  FETCH_LEAGUE_DETAILS_FAILURE
} from './constants';

export const createLeague = createAsyncAction(
  CREATE_LEAGUE,
  CREATE_LEAGUE_SUCCESS,
  CREATE_LEAGUE_FAILURE
)<CreateLeagueRequestBody, undefined, {}>();

export const fetchLeagues = createAsyncAction(
  FETCH_LEAGUES,
  FETCH_LEAGUES_SUCCESS,
  FETCH_LEAGUES_FAILURE
)<undefined, AllLeaguesViewModel[], {}>();

export const fetchLeagueDetails = createAsyncAction(
  FETCH_LEAGUE_DETAILS,
  FETCH_LEAGUE_DETAILS_SUCCESS,
  FETCH_LEAGUE_DETAILS_FAILURE
)<string, LeagueDetailsViewModel, {}>();
