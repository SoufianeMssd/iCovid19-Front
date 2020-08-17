// @flow
import * as React from 'react';
import './style.scss';
import {Modal} from '@material-ui/core';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/',
};

type Props = {
  open: Boolean,
  onClose: Function
}

const Authentication =({open, onClose}:Props) => (
  <Modal
    onClose={onClose}
    open={open}
  >
    <div className="auth">
      <button onClick={() => onClose()}>close</button>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  </Modal>
);


export default Authentication;