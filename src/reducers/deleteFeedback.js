// @flow

import type {DeleteFeedbackStoreType} from '../storeTypes/feedback';
import {DeleteFeedbackStoreFactory} from '../storeTypes/feedback';

import {
  DELETE_FEEDBACK,
  DELETE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_ERROR
} from '../actions/feedback';
import type {
  DeleteFeedbackAction,
  DeleteFeedbackSuccessAction,
  DeleteFeedbackErrorAction
} from '.../actions/feedback';

const DEFAULT_STATE: DeleteFeedbackStoreType = DeleteFeedbackStoreFactory({});

type FeedbackAction =
  DeleteFeedbackAction |
  DeleteFeedbackSuccessAction |
  DeleteFeedbackErrorAction;


export default function (
  state: DeleteFeedbackStoreType = DEFAULT_STATE,
  action: FeedbackAction
): DeleteFeedbackStoreType {
  switch (action.type) {
  case DELETE_FEEDBACK:
    return state.set('status', 'loading');
  case DELETE_FEEDBACK_SUCCESS:
    return state.set('status', 'success');
  case DELETE_FEEDBACK_ERROR:
    return state
      .set('error', action.error)
      .set('status', 'error');
  default:
    return state;
  }
}
