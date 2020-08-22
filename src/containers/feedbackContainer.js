// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import FeedbackList from '../components/feedbackList';
import type {FeedbackType} from '../storeTypes/feedback';
import type {UserType} from '../storeTypes/user';
import fetchFeedbackList from '../middleware/feedbackList';
import addFeedback from '../middleware/addFeedback';
import deleteFeedback from '../middleware/deleteFeedback';
import updateFeedback from '../middleware/updateFeedback';
import {List} from 'immutable';

type Props = {
  feedbackList: List<FeedbackType>,
  fetchFeedbackList: Function,
  addFeedback: Function,
  addFeedbackStatus: String,
  deleteFeedback: Function,
  sessionUser: UserType,
  updateFeedback: Function
}

class FeedbackContainer extends React.Component<Props> {
  componentDidMount() {
    const {fetchFeedbackList} = this.props;
    fetchFeedbackList();
  }

  render () {
    const {feedbackList, addFeedback, addFeedbackStatus, deleteFeedback,
      sessionUser, updateFeedback, fetchFeedbackList} = this.props;
    return (
      <FeedbackList
        addFeedback={addFeedback}
        addFeedbackStatus={addFeedbackStatus}
        deleteFeedback={deleteFeedback}
        feedbackList={feedbackList}
        fetchFeedbackList={fetchFeedbackList}
        sessionUser={sessionUser}
        updateFeedback={updateFeedback}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  'feedbackList': state.feedbackList.get('feedbackList'),
  'addFeedbackStatus': state.addFeedback.get('status'),
  'sessionUser': state.userLog.get('user')
});

const mapDispatchToProps = ({
  fetchFeedbackList,
  addFeedback,
  deleteFeedback,
  updateFeedback
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer);
