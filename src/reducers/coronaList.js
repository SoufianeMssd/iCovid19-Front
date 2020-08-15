// @flow

import type {CoronaListStoreType} from '../storeTypes/corona';
import {CoronaListStoreFactory} from '../storeTypes/corona';

import {
  GET_CORONA_LIST,
  GET_CORONA_LIST_SUCCESS,
  GET_CORONA_LIST_ERROR
} from '../actions/corona';
import type {
  GetCoronaListAction,
  GetCoronaListSuccessAction,
  GetCoronaListErrorAction
} from '.../actions/corona';

const DEFAULT_STATE: CoronaListStoreType = CoronaListStoreFactory({});

type CoronaListAction =
  GetCoronaListAction |
  GetCoronaListSuccessAction |
  GetCoronaListErrorAction;


export default function (
  state: CoronaListStoreType = DEFAULT_STATE,
  action: CoronaListAction
): CoronaListStoreType {
  switch (action.type) {
  case GET_CORONA_LIST:
    return state.set('status', 'loading');
  case GET_CORONA_LIST_SUCCESS:
    return state
      .set('coronaList', action.coronaList)
      .set('status', 'success');
  case GET_CORONA_LIST_ERROR:
    return state
      .set('error', action.error)
      .set('status', 'error');
  default:
    return state;
  }
}
