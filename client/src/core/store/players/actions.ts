import { createAsyncAction } from 'typesafe-actions';

import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
} from './constants';

export const fetchPlayers = createAsyncAction(
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
)<undefined, {}[], {}>(); /* TODO success return type */

export default {
  fetchPlayers
};
