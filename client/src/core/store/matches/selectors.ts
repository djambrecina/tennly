import { CREATE_MATCH_FORM } from 'app/modules/matches/constants';
import { CreateMatchFormValues } from 'app/modules/matches/types';
import { getFormValues } from 'redux-form';
import get from 'ts-get';
import { State } from 'types';

import { CreateMatchInfoState } from './types';

export const getCreateMatchInfo = (state: State): CreateMatchInfoState => (
  state.matches.createMatchInfo
);

const formValuesSelector = getFormValues(CREATE_MATCH_FORM);
const formValues = (state: State): CreateMatchFormValues => (
  formValuesSelector(state) as CreateMatchFormValues
);

export const getFormLoserId = (
  state: State
): number | undefined => get(formValues(state), f => f.loserId);

export const getFormWinnerId = (
  state: State
): number | undefined => get(formValues(state), f => f.winnerId);
