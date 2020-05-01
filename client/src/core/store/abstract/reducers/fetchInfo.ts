import {
  AnyAction,
  Reducer
} from 'redux';
import {
  createReducer,
  EmptyActionCreator,
  getType,
  PayloadActionCreator
} from 'typesafe-actions';

export interface FetchInfoState {
  loading: boolean;
  success: boolean;
  failure: boolean;
}

export const DEFAULT_STATE: FetchInfoState = {
  loading: false,
  success: false,
  failure: false
};

interface AsyncActions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: PayloadActionCreator<any, any> | EmptyActionCreator<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  success: PayloadActionCreator<any, any> | EmptyActionCreator<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  failure: PayloadActionCreator<any, any> | EmptyActionCreator<any>;
}

const fetchInfo = (asyncActions: AsyncActions): Reducer => (
  createReducer<FetchInfoState, AnyAction>(DEFAULT_STATE, {
    [getType(asyncActions.request)]: () => ({
      ...DEFAULT_STATE,
      loading: true
    }),
    [getType(asyncActions.success)]: () => ({
      ...DEFAULT_STATE,
      loading: false,
      success: true
    }),
    [getType(asyncActions.failure)]: () => ({
      ...DEFAULT_STATE,
      loading: false,
      failure: true
    })
  })
);

export default fetchInfo;
