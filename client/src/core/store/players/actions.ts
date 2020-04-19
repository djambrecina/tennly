import { createAsyncAction } from 'typesafe-actions';

import {
  AllPlayersViewModel,
  CreatePlayerRequestBody
} from '../../../../../shared/types/player';
import {
  CREATE_PLAYER,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_FAILURE,
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
} from './constants';

export const createPlayer = createAsyncAction(
  CREATE_PLAYER,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_FAILURE
)<CreatePlayerRequestBody, undefined, {}>();

export const fetchPlayers = createAsyncAction(
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
)<undefined, AllPlayersViewModel[], {}>();
