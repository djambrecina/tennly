import {
  all,
  fork
} from 'redux-saga/effects';

import leaguesSaga from './leagues/sagas';
import playersSaga from './players/sagas';

export default function* (): Generator {
  yield all([
    fork(leaguesSaga),
    fork(playersSaga)
  ]);
}
