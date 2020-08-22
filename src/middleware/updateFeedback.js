import axios from 'axios';
import {extURL} from '../helpers';

const updateFeedback = (feedbackId, user) => {
  return async () => {
    try {
      await axios.put(`${extURL}/feedback/${feedbackId}`, {user});
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default updateFeedback;