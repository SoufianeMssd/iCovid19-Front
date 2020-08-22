// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';
import Authentication from '../components/authentication';
import {logIn, logOut} from '../actions/user';

firebase.initializeApp({
  apiKey: 'AIzaSyB-azub62MXd1udbS5QI5lcxDkZhtFDSbU',
  authDomain: 'icovid19-7c4b8.firebaseapp.com'
});

type Props = {
  open: Boolean,
  onClose: Function,
  logIn: Function,
  logOut: Function
}


class AuthenticationContainer extends React.Component<Props> {
  componentDidMount() {
    const {logIn, logOut} = this.props;
    // Prevent the 2nd login with flag
    let flag = true;
    firebase.auth().onAuthStateChanged(user => {
      if (user && flag) {
        logIn({email: user.email, photoURL: user.photoURL, name: user.displayName});
        flag = false;
      } else if (!user) {
        logOut();
      }
    })
  }

  render () {
    const {open, onClose} = this.props;
    return (<React.Fragment>
      <Authentication
        onClose={onClose}
        open={open}
      />
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({'coronaList': state.coronaList.get('coronaList')});

const mapDispatchToProps = ({
  logIn,
  logOut
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer);