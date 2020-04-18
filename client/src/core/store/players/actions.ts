import { createAsyncAction } from 'typesafe-actions';

import { AllPlayersViewModel } from '../../../../../shared/viewModels/player';
import {
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
} from './constants';

export const fetchPlayers = createAsyncAction(
  FETCH_PLAYERS,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE
)<undefined, AllPlayersViewModel[], {}>();

export default {
  fetchPlayers
};
