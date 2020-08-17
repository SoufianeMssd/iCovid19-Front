// @flow

import type {UserType} from '../storeTypes/user';

// Log in
export const LOG_IN = 'LOG_IN';

export type LogInAction = {
  type: 'LOG_IN'
}

export const logIn = (user: UserType): LogInAction => ({
  'type': LOG_IN,
  user
});

// Log out

export const LOG_OUT = 'LOG_OUT';

export type LogOutAction = {
  type: 'LOG_OUT'
}

export const logOut = (): LogOutAction => ({
  'type': LOG_OUT
});
