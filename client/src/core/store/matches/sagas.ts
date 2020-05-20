import paths from 'config/paths';
import { push } from 'connected-react-router';
import {
  getCreateMatchInfo,
  postMatch
} from 'core/services/matches';
import {
  showErrorMessage,
  showSuccessMessage
} from 'core/services/notification';
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
  createMatch,
  fetchCreateMatchInfo
} from './actions';
import {
  CREATE_MATCH,
  FETCH_CREATE_MATCH_INFO
} from './constants';

function* watchCreateMatchSaga(): Generator {
  yield takeEvery(CREATE_MATCH,
    function* createMatchSaga(action: ActionType<typeof createMatch.request>) {
      try {
        const body = action.payload;
        yield call(postMatch, body);
        yield put(createMatch.success());
        showSuccessMessage("Match created");
        yield put(push(generatePath(paths.leagueDetails, { leagueId: body.leagueId })));
      }
      catch (err) {
        yield put(createMatch.failure(err));
        showErrorMessage("Creating match failed", err);
      }
    });
}

function* watchFetchCreateMatchInfoSaga(): Generator {
  yield takeLatest(FETCH_CREATE_MATCH_INFO,
    function* fetchCreateMatchInfoSaga(action: ActionType<typeof fetchCreateMatchInfo.request>) {
      try {
        const leagueId = action.payload;
        const createMatchInfo = yield call(getCreateMatchInfo, leagueId);
        yield put(fetchCreateMatchInfo.success(createMatchInfo));
      }
      catch (err) {
        yield put(fetchCreateMatchInfo.failure(err));
        showErrorMessage("Fetching league info failed", err);
      }
    });
}

function* matchesSaga(): Generator {
  yield all([
    fork(watchCreateMatchSaga),
    fork(watchFetchCreateMatchInfoSaga)
  ]);
}

export default matchesSaga;
