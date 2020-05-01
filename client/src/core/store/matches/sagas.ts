import { getCreateMatchInfo } from 'core/services/matches';
import { error } from 'core/services/notification';
import {
  all,
  call,
  fork,
  put,
  takeLatest
} from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { fetchCreateMatchInfo } from './actions';
import { FETCH_CREATE_MATCH_INFO } from './constants';

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
        error("Fetching league info failed", err);
      }
    });
}

function* matchesSaga(): Generator {
  yield all([
    fork(watchFetchCreateMatchInfoSaga)
  ]);
}

export default matchesSaga;
