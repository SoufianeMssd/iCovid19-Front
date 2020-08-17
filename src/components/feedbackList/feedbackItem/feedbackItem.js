/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import classNames from 'classnames';
import type {FeedbackType} from '../../storeTypes/feedback';
import userLogo from '../../../resources/images/user.png';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import {Tooltip} from '@material-ui/core';

import './style.scss';

const useStyles = makeStyles(() => ({
  delete: { 
    color: '#757c82',
    width: '19px',
    '&:hover': {
      color: '#fb5151',
      cursor: 'pointer'
    }
  }
}));

type Props = {
  feedback: FeedbackType,
  deleteFeedback: Function
};

const FeedbackItem = ({feedback, deleteFeedback}:Props) => {
  const classes = useStyles();

  const [animated, isAnimated] = React.useState(false);
  const [clicked, isClicked] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  return (
    <div className='feedback__item' key={feedback._id}>
      <div className='feedback__item__header'>
        <div className='feedback__item__header__left'>
          <img
            alt='feedback__item__header__left__photo'
            className='feedback__item__header__left__photo'
            src={userLogo}
          />
          <div className='feedback__item__header__left__text'>
            <div className='feedback__item__header__left__text__name'>Soufiane MOUSSAID</div>
            <div className='feedback__item__header__left__text__date'>2 months ago</div>
          </div>
        </div>
        {!confirmDelete && <div className='feedback__item__header__right'>
          <Tooltip title='delete'>
            <DeleteIcon
              className={classes.delete}
              onClick={() => setConfirmDelete(true)}
            />
          </Tooltip>
        </div>}
        {confirmDelete && <div className='feedback__item__header__confirm'>
          <div className='feedback__item__header__confirm__text'>Delete comment ?</div>
          <button
            className='feedback__item__header__confirm__cancel'
            onClick={() => setConfirmDelete(false)}
          >No</button>
          <button
            className='feedback__item__header__confirm__confirm'
            onClick={() => deleteFeedback(feedback)}
          >Yes</button>
        </div>}
      </div>
      <div className='feedback__item__text' >{feedback.message}</div>
      <div className='feedback__item__footer'>
        <Tooltip
          placement='right-end'
          title='like'
        >
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
        </Tooltip>
      </div>
    </div>);
};


export default FeedbackItem;
