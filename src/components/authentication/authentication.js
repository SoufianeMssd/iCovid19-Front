// @flow
import * as React from 'react';
import './style.scss';
import {Modal, Tooltip} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';
import {ClickAwayListener} from '@material-ui/core';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/'
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
    <div className="modal">
      <ClickAwayListener onClickAway={() => onClose()}>
        <div className="modal__auth">
          <Tooltip title='close'><CloseIcon className="modal__auth__close" onClick={() => onClose()} /></Tooltip>
          <div className="modal__auth__body">
            <div className="modal__auth__body__header">Welcome.</div>
            <div className="modal__auth__body__msg">
              Sign in to interact with comments <span role="img" aria-label="heart"> 😊</span>.</div>
            <StyledFirebaseAuth
              className="modal__auth__body__btns"
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            >Soufiane</StyledFirebaseAuth>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  </Modal>
);


export default Authentication;