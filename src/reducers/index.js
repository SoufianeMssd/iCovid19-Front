import {combineReducers} from 'redux';
import coronaList from './coronaList';
import feedbackList from './feedbackList';
import addFeedback from './addFeedback';
import deleteFeedback from './deleteFeedback';
import userLog from './userLog';

const combinedReducers = combineReducers({
  coronaList,
  feedbackList,
  addFeedback,
  deleteFeedback,
  userLog
});

export default combinedReducers;
