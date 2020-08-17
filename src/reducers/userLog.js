
// @flow

import type {LogUserStoreType} from '../storeTypes/user';
import {LogUserStoreFactory, } from '../storeTypes/user';

import {
  LOG_IN,
  LOG_OUT
} from '../actions/user';
import type {
  LogInAction,
  LogOutAction
} from '.../actions/user';

const DEFAULT_STATE: LogUserStoreType = LogUserStoreFactory({});

type LogUserAction =
  LogInAction |
  LogOutAction;


export default function (
  state: LogUserStoreType = DEFAULT_STATE,
  action: LogUserAction
): LogUserStoreType {
  switch (action.type) {
  case LOG_IN:
    return state.set('user', action.user);
  case LOG_OUT:
    return state.set('user', '');
  default:
    return state;
  }
}
