/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import {useState, useEffect} from 'react';
import classNames from 'classnames';
import Linkify from 'react-linkify';

import type {FeedbackType} from '../../../storeTypes/feedback';
import type {UserType} from '../../../storeTypes/user';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core/styles';
import {Tooltip} from '@material-ui/core';
import moment from 'moment';
import defaultUserIcon from '../../../images/user.png';

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
  setAuthenticate: Function
};

const FeedbackItem = ({feedback, deleteFeedback, updateFeedback, sessionUser, setAuthenticate}:Props) => {
  const classes = useStyles();

  useEffect(() => {
    isClicked(feedback.likes.includes(sessionUser.email))
  }, [sessionUser]);

  const [animated, isAnimated] = useState(false);
  const [clicked, isClicked] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const onLike = () => {
    if (sessionUser) {
      if (clicked) {
        const index = feedback.likes.indexOf(sessionUser.email);
        feedback.likes.splice(index, 1);
      } else {
        isAnimated(true);
        feedback.likes.push(sessionUser.email);
      }
      isClicked(!clicked);
      updateFeedback(feedback._id, sessionUser);
    } else {
      setAuthenticate(true);
    }
  }

  const onDefaultImg = (event) => event.target.src = defaultUserIcon;

  const {owner} = feedback;

  return (
    <div className='feedback__item' key={feedback._id}>
      <div className='feedback__item__header'>
        <div className='feedback__item__header__left'>
          <img
            alt='feedback__item__header__left__photo'
            className='feedback__item__header__left__photo'
            onError={onDefaultImg}
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
      <div className='feedback__item__text' ><Linkify>{feedback.message}</Linkify></div>
      <div className='feedback__item__footer'>
        <div  className='feedback__item__footer__wrap'>
          <Tooltip
            arrow
            title='like'
          >
            <div
              className='feedback__item__footer__wrap__heart'
              onClick={onLike}
            >
              <div
                className={classNames(
                  'feedback__item__footer__wrap__heart__icon',
                  {
                    'feedback__item__footer__wrap__heart__icon__animating': animated,
                    'feedback__item__footer__wrap__heart__icon__clicked': 
                    (clicked || feedback.likes.includes(sessionUser.email))
                  })}
                onAnimationEnd={() => isAnimated(false)}
              />
            </div>
          </Tooltip>
          <div className={classNames(
            'feedback__item__footer__wrap__number',
            {
              'feedback__item__footer__wrap__number__clicked': (clicked || feedback.likes.includes(sessionUser.email))
            })}
          >{feedback.likes.length}</div>
        </div>
      </div>
    </div>);
};


export default FeedbackItem;
