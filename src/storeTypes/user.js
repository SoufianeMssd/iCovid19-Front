// @flow

import type {RecordFactory, RecordOf} from 'immutable';
import {Record} from 'immutable';

export type UserProps = {
  _id: String,
  email: String,
  name: String,
  photoURL: String,
};

export type UserType = RecordOf<UserProps>;
export type UserFactoryType = RecordFactory<UserProps>;

export const UserFactory: UserFactoryType = Record({
  '_id': '',
  'email': '',
  'name': '',
  'photoURL': '',
});

// log User

type LogUserStoreProps = {user: UserType};
    
export type LogUserStoreType = RecordOf<LogUserStoreProps>;
export type LogUserStoreFactoryType = RecordFactory<LogUserStoreProps>;

export const LogUserStoreFactory: LogUserStoreFactoryType = Record({'user': ''});
