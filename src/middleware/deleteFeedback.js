import axios from 'axios';
import {DeleteFeedback, DeleteFeedbackSuccess, DeleteFeedbackError} from '../actions/feedback';
import GetFeedbackList from './feedbackList';
import {extURL} from '../helpers';
import type {FeedbackType} from '../storeTypes/feedback';

const deleteFeedback = ({_id}: FeedbackType) => {
  return async dispatch => {
    dispatch(DeleteFeedback());
    try {
      await axios.delete(`${extURL}/feedback/${_id}`);
      dispatch(DeleteFeedbackSuccess());
      dispatch(GetFeedbackList());
    } catch (err) {
      dispatch(DeleteFeedbackError('Error in removing feedback data'));
    }
  }
}

export default deleteFeedback;