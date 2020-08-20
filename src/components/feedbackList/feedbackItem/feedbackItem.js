/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import classNames from 'classnames';
import type {FeedbackType} from '../../storeTypes/feedback';
import type {UserType} from '../../storeTypes/user';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import {Tooltip} from '@material-ui/core';
import moment from 'moment';

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
  deleteFeedback: Function,
  updateFeedback: Function,
  sessionUser: UserType,
};

const FeedbackItem = ({feedback, deleteFeedback, updateFeedback, sessionUser}:Props) => {
  const classes = useStyles();

  const [animated, isAnimated] = React.useState(false);
  const [clicked, isClicked] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const {owner} = feedback;
  return (
    <div className='feedback__item' key={feedback._id}>
      <div className='feedback__item__header'>
        <div className='feedback__item__header__left'>
          <img
            alt='feedback__item__header__left__photo'
            className='feedback__item__header__left__photo'
            src={owner.photoURL}
          />
          <div className='feedback__item__header__left__text'>
            <div className='feedback__item__header__left__text__name'>{owner.name}</div>
            <div className='feedback__item__header__left__text__date'>{moment(feedback.createdAt).fromNow()}</div>
          </div>
        </div>
        {!confirmDelete && sessionUser.email === owner.email && <div className='feedback__item__header__right'>
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
      {sessionUser && <div className='feedback__item__footer'>
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
              updateFeedback(feedback._id, sessionUser._id)
            }
            }
            onAnimationEnd={() => isAnimated(false)}
          />
        </Tooltip>
      </div>}
    </div>);
};


export default FeedbackItem;
