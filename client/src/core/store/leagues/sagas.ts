import paths from 'config/paths';
import { push } from 'connected-react-router';
import {
  errorWithUserMessage,
  success
} from 'core/services/notification';
import {
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
  fetchLeagues
} from './actions';
import {
  CREATE_LEAGUE,
  FETCH_LEAGUES
} from './constants';

function* watchCreateLeagueSaga(): Generator {
  yield takeEvery(CREATE_LEAGUE,
    function* createLeagueSaga(action: ActionType<typeof createLeague.request>) {
      try {
        const body = action.payload;
        yield call(postLeague, body);
        yield put(createLeague.success());
        success("League created");
        yield put(push(generatePath(paths.leagues)));
      }
      catch (err) {
        yield put(createLeague.failure(err));
        errorWithUserMessage("Creating league failed");
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
      }
    });
}

function* leaguesSaga(): Generator {
  yield all([
    fork(watchCreateLeagueSaga),
    fork(watchFetchLeaguesSaga)
  ]);
}

export default leaguesSaga;
