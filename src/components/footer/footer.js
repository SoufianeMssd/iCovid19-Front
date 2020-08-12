// @flow
import * as React from 'react';
import './style.scss';
import linkedinIcon from '../../resources/images/linkedIn.png';
import facebookIcon from '../../resources/images/facebook.png';
import twitterIcon from '../../resources/images/twitter.png';
import {facebook, linkedIn, twitter} from '../../helpers';

const Footer =() => (<div className="footer">
  <div className="footer__madeby">
    <div className="footer__madeby__text">Made by</div>
    <div className="footer__madeby__name">
      <span
        className="footer__madeby__name__button"
        onClick={() => window.open(linkedIn)}
      >Soufiane</span>
    </div>
  </div>
  <div className="footer__icons">
    <img
      alt="footer__icons__linkedin"
      className="footer__icons__linkedin"
      onClick={() => window.open(linkedIn)}
      src={linkedinIcon}
    />
    <img
      alt="footer__icons__facebook"
      className="footer__icons__facebook"
      onClick={() => window.open(facebook)}
      src={facebookIcon}
    />
    <img 
      alt="footer__icons__twitter"
      className="footer__icons__twitter"
      onClick={() => window.open(twitter)}
      src={twitterIcon}
    />
  </div>
</div>);


export default Footer;