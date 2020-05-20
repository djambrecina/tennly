import { createAsyncAction } from 'typesafe-actions';

import fetchInfo, { DEFAULT_STATE } from './fetchInfo';

describe('fetchInfo reducer decorator test', () => {
  const action = createAsyncAction(
    "T",
    "T_SUCCESS",
    "T_FAILURE",
  )<string, string, string>();
  const requestAction = action.request("");
  const successAction = action.success("");
  const failureAction = action.failure("");
  const reducer = fetchInfo(action);

  it('should return default state when empty action is called', () => {
    expect(reducer(DEFAULT_STATE, { type: "" })).toEqual({
      loading: false,
      success: false,
      failure: false,
    });
  });

  it('should return loading=true when request action is called', () => {
    expect(reducer(DEFAULT_STATE, requestAction)).toEqual({
      loading: true,
      success: false,
      failure: false,
    });
  });

  it('should return success=true when success action is called', () => {
    expect(reducer(DEFAULT_STATE, successAction)).toEqual({
      loading: false,
      success: true,
      failure: false,
    });
  });

  it('should return failure=true when failure action is called', () => {
    expect(reducer(DEFAULT_STATE, failureAction)).toEqual({
      loading: false,
      success: false,
      failure: true,
    });
  });
});
