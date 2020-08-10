// @flow
import * as React from 'react';
import './style.scss';
import arrowIcon from '../../resources/images/arrow-right.png';
import flagIcon from '../../resources/images/flagMorocco.png';
import coverIcon from '../../resources/images/ppl-masks.jpeg';

const Corona = () => (<div className="corona">
  <div className="corona__header">
    <span className="corona__header__text1">COVID-19</span>
    <img alt="corona__header__arrow" className="corona__header__arrow" src={arrowIcon} />
    <img alt="corona__header__flag" className="corona__header__flag" src={flagIcon} />
    <span className="corona__header__text2">Morocco</span>
  </div>
  <img alt="corona__cover" className="corona__cover" src={coverIcon} />
</div>);


export default Corona;