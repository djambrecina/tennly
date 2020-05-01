import { ActionType } from 'typesafe-actions';

import { CreateMatchViewModel } from '../../../../../shared/types/match';
import * as matchActions from './actions';

export type CreateMatchInfoState = CreateMatchViewModel;

export type MatchesActions = ActionType<typeof matchActions>;
