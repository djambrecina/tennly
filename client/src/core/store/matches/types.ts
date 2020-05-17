import { CreateMatchViewModel } from 'tennly-shared';
import { ActionType } from 'typesafe-actions';

import * as matchActions from './actions';

export type CreateMatchInfoState = CreateMatchViewModel;

export type MatchesActions = ActionType<typeof matchActions>;
