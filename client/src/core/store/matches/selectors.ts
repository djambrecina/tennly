import { State } from 'types';

import { CreateMatchInfoState } from './types';

export const getCreateMatchInfo = (state: State): CreateMatchInfoState => (
  state.matches.createMatchInfo
);
