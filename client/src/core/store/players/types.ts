import { AllPlayersViewModel } from 'tennly-shared';
import { ActionType } from 'typesafe-actions';

import * as playersActions from './actions';

export type AllIdsState = number[];

export type ByIdState = Record<number, AllPlayersViewModel>;

export type PlayersActions = ActionType<typeof playersActions>;
