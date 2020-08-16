// @flow

import type {FeedbackListStoreType} from '../storeTypes/feedback';
import {FeedbackListStoreFactory} from '../storeTypes/feedback';

import {
  GET_FEEDBACK_LIST,
  GET_FEEDBACK_LIST_SUCCESS,
  GET_FEEDBACK_LIST_ERROR
} from '../actions/feedback';
import type {
  GetFeedbackListAction,
  GetFeedbackListSuccessAction,
  GetFeedbackListErrorAction
} from '.../actions/feedback';

const DEFAULT_STATE: FeedbackListStoreType = FeedbackListStoreFactory({});

type FeedbackListAction =
  GetFeedbackListAction |
  GetFeedbackListSuccessAction |
  GetFeedbackListErrorAction;


export default function (
  state: FeedbackListStoreType = DEFAULT_STATE,
  action: FeedbackListAction
): FeedbackListStoreType {
  switch (action.type) {
  case GET_FEEDBACK_LIST:
    return state.set('status', 'loading');
  case GET_FEEDBACK_LIST_SUCCESS:
    return state
      .set('feedbackList', action.feedbackList)
      .set('status', 'success');
  case GET_FEEDBACK_LIST_ERROR:
    return state
      .set('error', action.error)
      .set('status', 'error');
  default:
    return state;
  }
}
