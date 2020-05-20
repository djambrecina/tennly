import paths from 'config/paths';
import { push } from 'connected-react-router';
import {
  showErrorMessage,
  showSuccessMessage
} from 'core/services/notification';
import {
  getPlayers,
  postPlayer
} from 'core/services/players';
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
  createPlayer,
  fetchPlayers
} from './actions';
import {
  CREATE_PLAYER,
  FETCH_PLAYERS
} from './constants';

function* watchCreatePlayerSaga(): Generator {
  yield takeEvery(CREATE_PLAYER,
    function* createPlayerSaga(action: ActionType<typeof createPlayer.request>) {
      try {
        const body = action.payload;
        yield call(postPlayer, body);
        yield put(createPlayer.success());
        showSuccessMessage("Player created");
        yield put(push(generatePath(paths.players)));
      }
      catch (err) {
        yield put(createPlayer.failure(err));
        showErrorMessage("Creating player failed", err);
      }
    });
}

function* watchFetchPlayersSaga(): Generator {
  yield takeLatest(FETCH_PLAYERS,
    function* fetchPlayersSaga() {
      try {
        const players = yield call(getPlayers);
        yield put(fetchPlayers.success(players));
      }
      catch (err) {
        yield put(fetchPlayers.failure(err));
        showErrorMessage("Fetching players failed", err);
      }
    });
}

function* playersSaga(): Generator {
  yield all([
    fork(watchCreatePlayerSaga),
    fork(watchFetchPlayersSaga)
  ]);
}

export default playersSaga;
