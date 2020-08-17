// @flow
import * as React from 'react';
import './style.scss';
import covidIcon from '../../resources/images/covid19.png';
import {ClickAwayListener} from '@material-ui/core';
import firebase from 'firebase';

type Props = {
  sessionUser: UserType,
}

const NavBar = ({sessionUser}:Props) => {
  const [dropdownVisible, setDropDownVisible] = React.useState(false);
  
  return (<div className="nav-bar">
    <img alt="nav-bar__image" className="nav-bar__logo" src={covidIcon} />
    {sessionUser && 
      <img
        className="nav-bar__profile"
        onClick={() => setDropDownVisible(true)}
        src={sessionUser.photoURL}
      />}
    {dropdownVisible && <ClickAwayListener onClickAway={() => setDropDownVisible(false)}>
      <div
        className="nav-bar__dropdown"
        onClick={() => {firebase.auth().signOut(); setDropDownVisible(false)}}
      >Sign out</div>
    </ClickAwayListener>}
  </div>);
};


export default NavBar;