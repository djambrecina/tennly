import { createAsyncAction } from 'typesafe-actions';

import { CreateLeagueRequestBody } from '../../../../../shared/types/league';
import {
  CREATE_LEAGUE,
  CREATE_LEAGUE_SUCCESS,
  CREATE_LEAGUE_FAILURE,
} from './constants';

export const createLeague = createAsyncAction(
  CREATE_LEAGUE,
  CREATE_LEAGUE_SUCCESS,
  CREATE_LEAGUE_FAILURE
)<CreateLeagueRequestBody, undefined, {}>();
