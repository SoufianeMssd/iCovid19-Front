// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import FeedbackList from '../components/feedbackList';
import type {FeedbackType} from '../storeTypes/feedback';
import fetchFeedbackList from '../middleware/feedbackList';
import {List} from 'immutable';

type Props = {
  feedbackList: List<FeedbackType>,
  fetchFeedbackList: Function
}

class FeedbackContainer extends React.Component<Props> {
  componentDidMount() {
    const {fetchFeedbackList} = this.props;
    fetchFeedbackList();
  }

  render () {
    const {feedbackList} = this.props;
    return (
      <FeedbackList feedbackList={feedbackList} />
    );
  }
}

const mapStateToProps = (state) => ({'feedbackList': state.feedbackList.get('feedbackList')});

const mapDispatchToProps = ({'fetchFeedbackList': fetchFeedbackList});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer);
