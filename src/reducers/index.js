import {combineReducers} from 'redux';
import coronaList from './coronaList';
import feedbackList from './feedbackList';

const combinedReducers = combineReducers({
  coronaList,
  feedbackList
});

export default combinedReducers;
