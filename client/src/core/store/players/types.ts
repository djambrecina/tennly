import { Player } from 'core/models/player';
import { ActionType } from 'typesafe-actions';

import * as playersActions from './actions';

export type AllIdsState = number[];

export type ByIdState = Record<number, Player>;

export type PlayersActions = ActionType<typeof playersActions>;
