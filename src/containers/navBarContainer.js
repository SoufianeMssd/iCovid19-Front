// @flow
import * as React from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/navBar';
import {UserType} from '../storeTypes/user';

type Props = {
  sessionUser: UserType,
}

const NavBarContainer = ({sessionUser}:Props) => <NavBar sessionUser={sessionUser} />

const mapStateToProps = (state) => ({'sessionUser': state.userLog.get('user')});

export default connect(mapStateToProps)(NavBarContainer);