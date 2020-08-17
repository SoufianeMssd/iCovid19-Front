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
export const ADD_FEEDBACK = 'ADD_FEEDBACK';

export type AddFeedbackAction = {
  type: 'ADD_FEEDBACK'
}

export const AddFeedback = (): AddFeedbackAction => ({'type': ADD_FEEDBACK});


// Success
export const ADD_FEEDBACK_SUCCESS = 'ADD_FEEDBACK_SUCCESS';

export type AddFeedbackSuccessAction = {
  type: 'ADD_FEEDBACK_SUCCESS'
}

export const AddFeedbackSuccess = (): AddFeedbackSuccessAction => ({
  'type': ADD_FEEDBACK_SUCCESS
});


// Error
export const ADD_FEEDBACK_ERROR = 'ADD_FEEDBACK_ERROR';

export type AddFeedbackErrorAction = {
  type: 'ADD_FEEDBACK_ERROR',
  error: string
}

export const AddFeedbackError = (error: string): AddFeedbackErrorAction => ({
  'type': ADD_FEEDBACK_ERROR,
  error
});

/* feedback delete */

// Start
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK';

export type DeleteFeedbackAction = {
  type: 'DELETE_FEEDBACK'
}

export const DeleteFeedback = (): DeleteFeedbackAction => ({'type': DELETE_FEEDBACK});


// Success
export const DELETE_FEEDBACK_SUCCESS = 'DELETE_FEEDBACK_SUCCESS';

export type DeleteFeedbackSuccessAction = {
  type: 'DELETE_FEEDBACK_SUCCESS'
}

export const DeleteFeedbackSuccess = (): DeleteFeedbackSuccessAction => ({
  'type': DELETE_FEEDBACK_SUCCESS
});


// Error
export const DELETE_FEEDBACK_ERROR = 'DELETE_FEEDBACK_ERROR';

export type DeleteFeedbackErrorAction = {
  type: 'DELETE_FEEDBACK_ERROR',
  error: string
}

export const DeleteFeedbackError = (error: string): DeleteFeedbackErrorAction => ({
  'type': DELETE_FEEDBACK_ERROR,
  error
});