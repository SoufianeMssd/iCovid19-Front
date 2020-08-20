import axios from 'axios';
import {GetFeedbackList, GetFeedbackListSuccess, GetFeedbackListError} from '../actions/feedback';
import {extURL} from '../helpers';
import {FeedbackFactory} from '../storeTypes/feedback';
import {UserFactory} from '../storeTypes/user';

const fetchFeedbackList = () => {
  return async dispatch => {
    dispatch(GetFeedbackList());
    try {
      const response = await axios.get(`${extURL}/feedback`);
      dispatch(GetFeedbackListSuccess(response.data.map(item =>
        FeedbackFactory({
          _id: item._id,
          message: item.message,
          likes: item.likes,
          createdAt: item.createdAt,
          owner: UserFactory(item.owner)
        })
      )));
    } catch (err) {
      dispatch(GetFeedbackListError('Error in fetching feedback data'));
    }
  }
}

export default fetchFeedbackList;