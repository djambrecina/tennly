import { Player } from 'core/models/player';
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
)<undefined, Player[], {}>();

export default {
  fetchPlayers
};
