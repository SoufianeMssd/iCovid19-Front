import axios from 'axios';
import {GetFeedbackList, GetFeedbackListSuccess, GetFeedbackListError} from '../actions/feedback';
import {extURL} from '../helpers';
import {FeedbackFactory} from '../storeTypes/feedback';

const fetchFeedbackList = () => {
  return async dispatch => {
    dispatch(GetFeedbackList());
    try {
      const response = await axios.get(`${extURL}/feedback`);
      dispatch(GetFeedbackListSuccess(response.data.map(item => FeedbackFactory(item))));
    } catch (err) {
      dispatch(GetFeedbackListError('Error in fetching feedback data'));
    }
  }
}

export default fetchFeedbackList;