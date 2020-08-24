/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import {useEffect} from 'react';
import {List} from 'immutable';
import ShowMore from 'react-show-more-list';
import type {FeedbackType} from '../../storeTypes/feedback';
import type {UserType} from '../../storeTypes/user';
import FeedbackItem from './feedbackItem';
import {FeedbackFactory} from '../../storeTypes/feedback';
import AuthenticationContainer from '../../containers/authenticationContainer';
import defaultUserIcon from '../../images/user.png';

import './style.scss';

type Props = {
  feedbackList: List<FeedbackType>,
  addFeedback: Function,
  addFeedbackStatus: String,
  deleteFeedback: Function,
  sessionUser: UserType,
  updateFeedback: Function,
  fetchFeedbackList: Function
};

const Feedback = ({
  feedbackList, addFeedback, addFeedbackStatus,
  deleteFeedback, sessionUser, updateFeedback,
  fetchFeedbackList
}:Props) => {
  const [comment, setComment] = React.useState('');
  const [authenticate, setAuthenticate] = React.useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchFeedbackList();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onDefaultImg = (event) => event.target.src = defaultUserIcon;

  return (<div className='feedback'>
    <AuthenticationContainer
      onClose={() => setAuthenticate(false)}
      open={authenticate}
    />
    <div className='feedback__title'>Comments ({feedbackList.length})</div>
    <div className='feedback__card'>
      {sessionUser && <div className='feedback__card__header'>
        <img
          alt='feedback__card__header__photo'
          className='feedback__card__header__photo'
          onError={onDefaultImg}
          src={sessionUser.photoURL}
        />
        <div className='feedback__card__header__name'>
          {sessionUser.name}
        </div>
      </div>}
      <textarea
        className='feedback__card__input'
        placeholder='What do you think?'
        style={{'resize': 'none'}}
        onChange={(e) => setComment(e.target.value)}
        onClick={() => !sessionUser && setAuthenticate(true)}
        value={comment}
      />
      {sessionUser && <div className='feedback__card__btn'>
        <button
          className='feedback__card__btn__comment'
          disabled={comment.length < 2 || addFeedbackStatus === 'loading'}
          onClick={() => {
            addFeedback(FeedbackFactory({message: comment}), sessionUser);
            setComment('');
          }}
        >Comment</button>
      </div> }
    </div>
    <ShowMore
      items={feedbackList}
      by={3}
    >
      {({
        current,
        onMore,
      }) => (
        <React.Fragment>
          <div className='feedback__list'>
            {current.map((feedback) => 
              <FeedbackItem
                deleteFeedback={deleteFeedback}
                feedback={feedback}
                key={feedback._id}
                sessionUser={sessionUser}
                setAuthenticate={setAuthenticate}
                updateFeedback={updateFeedback}
              />
            )}
          </div>
          <button
            className='feedback__more'
            disabled={!onMore}
            onClick={() => { !!onMore && onMore(); }}
          >
            Show more
          </button>
        </React.Fragment>
      )}
    </ShowMore>
  </div>);
};


export default Feedback;
