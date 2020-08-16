/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import classNames from 'classnames';
import type {FeedbackType} from '../../storeTypes/feedback';
import userLogo from '../../../resources/images/user.png';

import './style.scss';

type Props = {feedback: FeedbackType};

const FeedbackItem = ({feedback}:Props) => {
  const [animated, isAnimated] = React.useState(false);
  const [clicked, isClicked] = React.useState(false);
  return (
    <div className='feedback__item' key={feedback._id}>
      <div className='feedback__item__header'>
        <img
          alt='feedback__item__header__photo'
          className='feedback__item__header__photo'
          src={userLogo}
        />
        <div className='feedback__item__header__text'>
          <div className='feedback__item__header__text__name'>Soufiane MOUSSAID</div>
          <div className='feedback__item__header__text__date'>2 months ago</div>
        </div>
      </div>
      <div className='feedback__item__text' >{feedback.message}</div>
      <div className='feedback__item__footer'>
        <div
          className={classNames(
            'feedback__item__footer__heart',
            {
              'feedback__item__footer__heart__animating': animated,
              'feedback__item__footer__heart__clicked': clicked
            })}
          onClick={() => {
            !clicked && isAnimated(true);
            isClicked(!clicked);
          }
          }
          onAnimationEnd={() => isAnimated(false)}
        />
      </div>
    </div>);
};


export default FeedbackItem;
