// @flow

import type {CoronaType} from '../storeTypes/corona';
import {List} from 'immutable';

/* corona List */

// Get
export const GET_CORONA_LIST = 'GET_CORONA_LIST';

export type GetCoronaListAction = {
  type: 'GET_CORONA_LIST'
}

export const GetCoronaList = (): GetCoronaListAction => ({'type': GET_CORONA_LIST});


// Success
export const GET_CORONA_LIST_SUCCESS = 'GET_CORONA_LIST_SUCCESS';

export type GetCoronaListSuccessAction = {
  type: 'GET_CORONA_LIST_SUCCESS',
  coronalist: List<CoronaType>
}

export const GetCoronaListSuccess = (coronaList: List<CoronaType>): GetCoronaListSuccessAction => ({
  'type': GET_CORONA_LIST_SUCCESS,
  coronaList
});


// Error
export const GET_CORONA_LIST_ERROR = 'GET_CORONA_LIST_ERROR';

export type GetCoronaListErrorAction = {
  type: 'GET_CORONA_LIST_ERROR',
  error: string
}

export const GetCoronaListError = (error: string): GetCoronaListErrorAction => ({
  'type': GET_CORONA_LIST_ERROR,
  error
});
