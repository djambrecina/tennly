import {
  all,
  fork
} from 'redux-saga/effects';

import playersSaga from './players/sagas';

export default function* (): Generator {
  yield all([
    fork(playersSaga)
  ]);
}
