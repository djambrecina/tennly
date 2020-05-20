import paths from 'config/paths';
import { push } from 'connected-react-router';
import {
  showErrorMessage,
  showSuccessMessage
} from 'core/services/notification';
import {
  getDetails,
  getLeagues,
  postLeague
} from 'core/services/leagues';
import { generatePath } from 'react-router';
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import {
  createLeague,
  fetchLeagues,
  fetchLeagueDetails
} from './actions';
import {
  CREATE_LEAGUE,
  FETCH_LEAGUES,
  FETCH_LEAGUE_DETAILS
} from './constants';

function* watchCreateLeagueSaga(): Generator {
  yield takeEvery(CREATE_LEAGUE,
    function* createLeagueSaga(action: ActionType<typeof createLeague.request>) {
      try {
        const body = action.payload;
        yield call(postLeague, body);
        yield put(createLeague.success());
        showSuccessMessage("League created");
        yield put(push(generatePath(paths.leagues)));
      }
      catch (err) {
        yield put(createLeague.failure(err));
        showErrorMessage("Creating league failed", err);
      }
    });
}

function* watchFetchLeaguesSaga(): Generator {
  yield takeLatest(FETCH_LEAGUES,
    function* fetchLeaguesSaga() {
      try {
        const leagues = yield call(getLeagues);
        yield put(fetchLeagues.success(leagues));
      }
      catch (err) {
        yield put(fetchLeagues.failure(err));
        showErrorMessage("Fetching leagues failed", err);
      }
    });
}

function* watchFetchLeagueDetailsSaga(): Generator {
  yield takeLatest(FETCH_LEAGUE_DETAILS,
    function* fetchLeagueDetailsSaga(action: ActionType<typeof fetchLeagueDetails.request>) {
      try {
        const leagueId = action.payload;
        const leagueDetails = yield call(getDetails, leagueId);
        yield put(fetchLeagueDetails.success(leagueDetails));
      }
      catch (err) {
        yield put(fetchLeagueDetails.failure(err));
        showErrorMessage("Fetching league details failed", err);
      }
    });
}

function* leaguesSaga(): Generator {
  yield all([
    fork(watchCreateLeagueSaga),
    fork(watchFetchLeaguesSaga),
    fork(watchFetchLeagueDetailsSaga)
  ]);
}

export default leaguesSaga;
