/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import {List} from 'immutable';
import type {FeedbackType} from '../../storeTypes/feedback';
import type {UserType} from '../../storeTypes/user';
import FeedbackItem from './feedbackItem';
import {FeedbackFactory} from '../../storeTypes/feedback';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AuthenticationContainer from '../../containers/authenticationContainer';

import './style.scss';

type Props = {
  feedbackList: List<FeedbackType>,
  addFeedback: Function,
  addFeedbackStatus: String,
  deleteFeedback: Function,
  sessionUser: UserType
};

const Feedback = ({feedbackList, addFeedback, addFeedbackStatus, deleteFeedback, sessionUser}:Props) => {
  const [comment, setComment] = React.useState('');
  const [authenticate, setAuthenticate] = React.useState(false);
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
          onClick={() => addFeedback(FeedbackFactory({message: comment}))}
        >Comment</button>
      </div> }
    </div>
    <div className='feedback__list'>
      <TransitionGroup>
        {feedbackList.map((feedback) => 
          <CSSTransition
            key={feedback}
            timeout={500} classNames={{
              enter: 'my-enter',
              enterActive: 'my-active-enter',
              exit: 'my-exit',
              exitActive: 'my-active-exit'
            }}
          >
            <FeedbackItem
              deleteFeedback={deleteFeedback}
              feedback={feedback}
              key={feedback._id}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      
    </div>
  </div>);
};


export default Feedback;
