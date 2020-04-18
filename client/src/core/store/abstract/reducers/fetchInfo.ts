import {
  AnyAction,
  Reducer
} from 'redux';
import {
  AsyncActionCreatorBuilder,
  createReducer
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncActions = AsyncActionCreatorBuilder<[any, any], [any, any], [any, any]>;

const fetchInfo = (asyncActions: AsyncActions): Reducer => (
  createReducer<FetchInfoState, AnyAction>(DEFAULT_STATE)
    .handleAction(asyncActions.request, () => ({
      ...DEFAULT_STATE,
      loading: true
    }))
    .handleAction(asyncActions.success, () => ({
      ...DEFAULT_STATE,
      loading: false,
      success: true
    }))
    .handleAction(asyncActions.failure, () => ({
      ...DEFAULT_STATE,
      loading: false,
      failure: true
    }))
);

export default fetchInfo;
