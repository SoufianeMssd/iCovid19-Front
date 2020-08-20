import axios from 'axios';
import GetFeedbackList from './feedbackList';
import {extURL} from '../helpers';

const updateFeedback = (feedbackId, userId) => {
  return async dispatch => {
    try {
      await axios.put(`${extURL}/feedback/${feedbackId}/${userId}`);
      dispatch(GetFeedbackList());
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default updateFeedback;