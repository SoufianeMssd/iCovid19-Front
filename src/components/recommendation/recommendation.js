// @flow
import * as React from 'react';
import './style.scss';
import {Modal, Tooltip} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {ClickAwayListener} from '@material-ui/core';
import recommendIcon from '../../images/recommend2.png';
import washIcon from '../../images/wash.png';
import maskICon from '../../images/mask.png';
import homeICon from '../../images/home.png';
import handVirus from '../../images/handVirus.png';
import elbowIcon from '../../images/elbow.png';
import doctorIcon from '../../images/doctor.png';
import distanceIcon from '../../images/distance.png';


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
        <div className="modal__recommend">
          <Tooltip title='close'><CloseIcon className="modal__recommend__close" onClick={() => onClose()} /></Tooltip>
          <div className="modal__recommend__header">
            <img
              alt="modal__recommend__header__logo"
              className="modal__recommend__header__logo"
              src={recommendIcon}
            />
            <div className="modal__recommend__header__text">Wear a mask. Save lives.</div>
          </div>
          <div className="modal__recommend__body">
            <div className="modal__recommend__body__title">To prevent the spread of COVID-19:</div>
            <div className="modal__recommend__body__items">
              <div className="modal__recommend__body__items__item">
                <img
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img"
                  src={washIcon}
                />
                <div className="modal__recommend__body__items__item__text">
                  Clean your hands often. Use soap and water, or an alcohol-based hand rub.</div>
              </div>
              <div className="modal__recommend__body__items__item">
                <img
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img"
                  src={distanceIcon}
                />
                <div className="modal__recommend__body__items__item__text">
                  Maintain a safe distance from anyone who is coughing or sneezing.</div>
              </div>
            </div>
            <div className="modal__recommend__body__items">
              <div className="modal__recommend__body__items__item">
                <img
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img"
                  src={maskICon}
                />
                <div className="modal__recommend__body__items__item__text">
                  Wear a mask when physical distancing is not possible.</div>
              </div>
              <div className="modal__recommend__body__items__item">
                <img
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img"
                  src={handVirus}
                />
                <div className="modal__recommend__body__items__item__text">Don’t touch your eyes, nose or mouth.</div>
              </div>
            </div>
            <div className="modal__recommend__body__items">
              <div className="modal__recommend__body__items__item">
                <img
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img"
                  src={elbowIcon}
                />
                <div className="modal__recommend__body__items__item__text">
                  Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</div>
              </div>
              <div className="modal__recommend__body__items__item">
                <img 
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img"
                  src={homeICon}
                />
                <div className="modal__recommend__body__items__item__text">Stay home if you feel unwell.</div>
              </div>
            </div>
            <div className="modal__recommend__body__items">
              <div className="modal__recommend__body__items__item">
                <img 
                  alt="modal__recommend__body__items__item__img"
                  className="modal__recommend__body__items__item__img" 
                  src={doctorIcon} 
                />
                <div className="modal__recommend__body__items__item__text">
                  If you have a fever, cough and difficulty breathing, seek medical attention.</div>
              </div>
            </div>
          </div>
          <div className="modal__recommend__footer">Thank You <span role="img" aria-label="heart">🖤</span></div>
        </div>
      </ClickAwayListener>
    </div>
  </Modal>
);


export default Authentication;