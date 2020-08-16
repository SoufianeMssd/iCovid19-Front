// @flow

import type {RecordFactory, RecordOf} from 'immutable';
import {List, Record} from 'immutable';

export type CoronaProps = {
  _id: String,
  cases: Number,
  deaths: Number,
  recovered: Number,
  createAt: string
};

export type CoronaType = RecordOf<CoronaProps>;
export type CoronaFactoryType = RecordFactory<CoronaProps>;

export const CoronaFactory: CoronaFactoryType = Record({
  '_id': '',
  'cases': 0,
  'deaths': 0,
  'recovered': 0,
  'createAt': '',
});

// Corona List

type CoronaListStoreProps = {
  status: 'loading' | 'error' | 'success' | 'idle',
  error: String,
  coronaList: List<CoronaType>,
};
  
export type CoronaListStoreType = RecordOf<CoronaListStoreProps>;
export type CoronaListStoreFactoryType = RecordFactory<CoronaListStoreProps>;

export const CoronaListStoreFactory: CoronaListStoreFactoryType = Record({
  'status': 'idle',
  'error': '',
  'coronaList': List()
});