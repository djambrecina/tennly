import { ActionType } from 'typesafe-actions';

import { AllPlayersViewModel } from '../../../../../shared/types/player';
import * as playersActions from './actions';

export type AllIdsState = number[];

export type ByIdState = Record<number, AllPlayersViewModel>;

export type PlayersActions = ActionType<typeof playersActions>;
