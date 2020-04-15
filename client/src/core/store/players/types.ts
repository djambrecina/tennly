import { ActionType } from 'typesafe-actions';

import * as playersActions from './actions';

export type PlayersActions = ActionType<typeof playersActions>;
