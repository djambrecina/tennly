import { getPlayers } from 'core/services/players';
import {
  all,
  call,
  fork,
  put,
  takeLatest
} from 'redux-saga/effects';

import { fetchPlayers } from './actions';
import { FETCH_PLAYERS } from './constants';

function* watchFetchPlayersSaga(): Generator {
  yield takeLatest(FETCH_PLAYERS, function* () {
    try {
      const players = yield call(getPlayers);
      yield put(fetchPlayers.success(players));
    }
    catch (err) {
      yield put(fetchPlayers.failure(err));
    }
  });
}

function* playersSaga(): Generator {
  yield all([
    fork(watchFetchPlayersSaga)
  ]);
}

export default playersSaga;
