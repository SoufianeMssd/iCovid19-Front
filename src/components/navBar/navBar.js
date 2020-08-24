// @flow
import * as React from 'react';
import './style.scss';
import type {UserType} from '../../storeTypes/user';
import covidIcon from '../../images/covid19Green.png';
import {ClickAwayListener} from '@material-ui/core';
import firebase from 'firebase';
import Recommendation from '../recommendation';
import defaultUserIcon from '../../images/user.png';

type Props = {
  sessionUser: UserType,
}

const NavBar = ({sessionUser}:Props) => {
  const [dropdownVisible, setDropDownVisible] = React.useState(false);
  const [recommendationVisible, setRecommendationVisible] = React.useState(false);

  const onDefaultImg = (event) => event.target.src = defaultUserIcon;
  
  return (<div className="nav-bar">
    <img alt="nav-bar__image" className="nav-bar__logo" src={covidIcon} />
    <div className="nav-bar__left">
      <div
        className="nav-bar__left__recommendation"
        onClick={() => setRecommendationVisible(true)}
      >Recommendations</div>
      <div className="nav-bar__left__profile">
        {sessionUser && 
        <img
          alt="nav-bar__left__profile__img"
          className="nav-bar__left__profile__img"
          onClick={() => setDropDownVisible(true)}
          onError={onDefaultImg}
          src={sessionUser.photoURL}
        />}
        {dropdownVisible && <ClickAwayListener onClickAway={() => setDropDownVisible(false)}>
          <div
            className="nav-bar__left__profile__dropdown"
            onClick={() => {firebase.auth().signOut(); setDropDownVisible(false)}}
          >Sign out</div>
        </ClickAwayListener>}
      </div>
    </div>
    <Recommendation open={recommendationVisible} onClose={() => setRecommendationVisible(false)} />
  </div>);
};


export default NavBar;