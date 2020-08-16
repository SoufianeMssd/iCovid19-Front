// @flow

import type {FeedbackType} from '../storeTypes/feedback';
import {List} from 'immutable';

/* feedback List */

// Get
export const GET_FEEDBACK_LIST = 'GET_FEEDBACK_LIST';

export type GetFeedbackListAction = {
  type: 'GET_FEEDBACK_LIST'
}

export const GetFeedbackList = (): GetFeedbackListAction => ({'type': GET_FEEDBACK_LIST});


// Success
export const GET_FEEDBACK_LIST_SUCCESS = 'GET_FEEDBACK_LIST_SUCCESS';

export type GetFeedbackListSuccessAction = {
  type: 'GET_FEEDBACK_LIST_SUCCESS',
  feedbacklist: List<FeedbackType>
}

export const GetFeedbackListSuccess = (feedbackList: List<FeedbackType>): GetFeedbackListSuccessAction => ({
  'type': GET_FEEDBACK_LIST_SUCCESS,
  feedbackList
});


// Error
export const GET_FEEDBACK_LIST_ERROR = 'GET_FEEDBACK_LIST_ERROR';

export type GetFeedbackListErrorAction = {
  type: 'GET_FEEDBACK_LIST_ERROR',
  error: string
}

export const GetFeedbackListError = (error: string): GetFeedbackListErrorAction => ({
  'type': GET_FEEDBACK_LIST_ERROR,
  error
});

/* feedback Submit */

// Start
export const ADD_FEEDBBACK = 'ADD_FEEDBBACK';

export type AddFeedbackAction = {
  type: 'ADD_FEEDBBACK'
}

export const AddFeedback = (): AddFeedbackAction => ({'type': ADD_FEEDBBACK});


// Success
export const ADD_FEEDBBACK_SUCCESS = 'ADD_FEEDBBACK_SUCCESS';

export type AddFeedbackSuccessAction = {
  type: 'ADD_FEEDBBACK_SUCCESS',
  feedbacklist: List<FeedbackType>
}

export const AddFeedbackSuccess = (feedbackList: List<FeedbackType>): AddFeedbackSuccessAction => ({
  'type': ADD_FEEDBBACK_SUCCESS,
  feedbackList
});


// Error
export const ADD_FEEDBBACK_ERROR = 'ADD_FEEDBBACK_ERROR';

export type AddFeedbackErrorAction = {
  type: 'ADD_FEEDBBACK_ERROR',
  error: string
}

export const AddFeedbackError = (error: string): AddFeedbackErrorAction => ({
  'type': ADD_FEEDBBACK_ERROR,
  error
});
