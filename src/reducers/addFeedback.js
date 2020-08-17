// @flow

import type {AddFeedbackStoreType} from '../storeTypes/feedback';
import {AddFeedbackStoreFactory} from '../storeTypes/feedback';

import {
  ADD_FEEDBACK,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_ERROR
} from '../actions/feedback';
import type {
  AddFeedbackAction,
  AddFeedbackSuccessAction,
  AddFeedbackErrorAction
} from '.../actions/feedback';

const DEFAULT_STATE: AddFeedbackStoreType = AddFeedbackStoreFactory({});

type FeedbackAction =
  AddFeedbackAction |
  AddFeedbackSuccessAction |
  AddFeedbackErrorAction;


export default function (
  state: AddFeedbackStoreType = DEFAULT_STATE,
  action: FeedbackAction
): AddFeedbackStoreType {
  switch (action.type) {
  case ADD_FEEDBACK:
    return state.set('status', 'loading');
  case ADD_FEEDBACK_SUCCESS:
    return state.set('status', 'success');
  case ADD_FEEDBACK_ERROR:
    return state
      .set('error', action.error)
      .set('status', 'error');
  default:
    return state;
  }
}
