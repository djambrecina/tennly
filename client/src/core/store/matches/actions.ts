import {
  CreateMatchRequestBody,
  CreateMatchViewModel
} from 'tennly-shared';
import { createAsyncAction } from 'typesafe-actions';

import {
  CREATE_MATCH,
  CREATE_MATCH_SUCCESS,
  CREATE_MATCH_FAILURE,
  FETCH_CREATE_MATCH_INFO,
  FETCH_CREATE_MATCH_INFO_SUCCESS,
  FETCH_CREATE_MATCH_INFO_FAILURE
} from './constants';

export const createMatch = createAsyncAction(
  CREATE_MATCH,
  CREATE_MATCH_SUCCESS,
  CREATE_MATCH_FAILURE
)<CreateMatchRequestBody, undefined, {}>();

export const fetchCreateMatchInfo = createAsyncAction(
  FETCH_CREATE_MATCH_INFO,
  FETCH_CREATE_MATCH_INFO_SUCCESS,
  FETCH_CREATE_MATCH_INFO_FAILURE
)<string, CreateMatchViewModel, {}>();
