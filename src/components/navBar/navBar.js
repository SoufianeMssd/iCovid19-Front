// @flow
import * as React from 'react';
import './style.scss';
import covidIcon from '../../resources/images/covid19.png';

const NavBar =() => (<div className="nav-bar">
  <img alt="nav-bar__image" className="nav-bar__image" src={covidIcon} />
</div>);


export default NavBar;