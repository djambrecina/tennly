import { createAsyncAction } from 'typesafe-actions';

import { CreateMatchViewModel } from '../../../../../shared/types/match';
import {
  FETCH_CREATE_MATCH_INFO,
  FETCH_CREATE_MATCH_INFO_SUCCESS,
  FETCH_CREATE_MATCH_INFO_FAILURE
} from './constants';

export const fetchCreateMatchInfo = createAsyncAction(
  FETCH_CREATE_MATCH_INFO,
  FETCH_CREATE_MATCH_INFO_SUCCESS,
  FETCH_CREATE_MATCH_INFO_FAILURE
)<string, CreateMatchViewModel, {}>();
