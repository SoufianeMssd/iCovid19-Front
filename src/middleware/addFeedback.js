import axios from 'axios';
import {AddFeedback, AddFeedbackSuccess, AddFeedbackError} from '../actions/feedback';
import GetFeedbackList from './feedbackList';
import {extURL} from '../helpers';
import type {FeedbackType} from '../storeTypes/feedback';

const addFeedback = ({message}: FeedbackType) => {
  return async dispatch => {
    dispatch(AddFeedback());
    try {
      await axios.post(`${extURL}/feedback`, {message});
      dispatch(AddFeedbackSuccess());
      dispatch(GetFeedbackList());
    } catch (err) {
      dispatch(AddFeedbackError('Error in adding feedback data'));
    }
  }
}

export default addFeedback;