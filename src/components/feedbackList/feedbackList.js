/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import {List} from 'immutable';
import type {FeedbackType} from '../../storeTypes/feedback';
import userLogo from '../../resources/images/user.png';
import FeedbackItem from './feedbackItem';

import './style.scss';

type Props = {feedbackList: List<FeedbackType>};

const Feedback = ({feedbackList}:Props) => {
  const [comment, setComment] = React.useState('');
  return (<div className='feedback'>
    <div className='feedback__title'>Comments ({feedbackList.length})</div>
    <div className='feedback__card'>
      <div className='feedback__card__header'>
        <img
          alt='feedback__card__header__photo'
          className='feedback__card__header__photo'
          src={userLogo}
        />
        <div className='feedback__card__header__name'>
          Soufiane MOUSSAID
        </div>
      </div>
      <textarea
        className='feedback__card__input'
        placeholder='What do you think?'
        style={{'resize': 'none'}}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <div className='feedback__card__btn'>
        <button className='feedback__card__btn__comment'>Comment</button>
      </div> 
    </div>
    <div className='feedback__list'>{feedbackList.map((feedback) => 
      <FeedbackItem feedback={feedback} key={feedback._id} />
    )}
    </div>
  </div>);
};


export default Feedback;
