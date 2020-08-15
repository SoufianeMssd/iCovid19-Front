/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {List} from 'immutable';
import type {CoronaType} from '../../storeTypes/corona';

import {highchartsDeathsConfig, highchartsCasesConfig} from '../../helpers';
import './style.scss';
import arrowIcon from '../../resources/images/arrow-right.png';
import flagIcon from '../../resources/images/flagMorocco.png';
import coverIcon from '../../resources/images/ppl-masks.jpeg';
import clockIcon from '../../resources/images/clockY.png';
import classNames from 'classnames';

type Props = {coronaList: List<CoronaType>};

const Corona = ({coronaList}:Props) => {
  const [daily, isDaily] = React.useState(true);
  return (<div className='corona'>
    <div className='corona__header'>
      <span className='corona__header__text1'>COVID-19</span>
      <img alt='corona__header__arrow' className='corona__header__arrow' src={arrowIcon} />
      <img alt='corona__header__flag' className='corona__header__flag' src={flagIcon} />
      <span className='corona__header__text2'>Morocco</span>
    </div>
    <img alt='corona__cover' className='corona__cover' src={coverIcon} />
    <div className='corona__text'>In <span className='corona__text__blue'>Morocco</span>, from 
      <span className='corona__text__blue'> Mar 03</span> to 
      <span className='corona__text__blue'> {moment().format('LLLL')}</span>, there have been 
      <span className='corona__text__blue'> {`${coronaList.length > 0 ? 
        coronaList[coronaList.length - 1].cases : '#####'} confirmed cases`}</span> of COVID-19 with 
      <span className='corona__text__orange'> {`${coronaList.length > 0 ? 
        coronaList[coronaList.length - 1].deaths : '###'} deaths`}</span>.</div>
    <div className='corona__title'>
      <img alt='corona__title__image' className='corona__title__image' src={clockIcon} />
      <span className='corona__title__text'>Today</span>
    </div>
    <div className='corona__new'>
      <span className='corona__new__cases'>
        <div className='corona__new__cases__title'>Cases</div>
        <div className='corona__new__cases__value'>{coronaList.length > 0 ? 
          `+${coronaList[coronaList.length - 1].cases - coronaList[coronaList.length - 2].cases}` : '###'}</div>
      </span>
      <span className='corona__new__recovered'>
        <div className='corona__new__recovered__title'>Recovered</div>
        <div className='corona__new__recovered__value'>{coronaList.length > 0 ? 
          `+${coronaList[coronaList.length - 1].recovered - coronaList[coronaList.length - 2].recovered}` : '###'}</div>
      </span>
      <span className='corona__new__deaths'>
        <div className='corona__new__deaths__title'>Deaths</div>
        <div className='corona__new__deaths__value'>{coronaList.length > 0 ? 
          `+${coronaList[coronaList.length - 1].deaths - coronaList[coronaList.length - 2].deaths}` : '###'}</div>
      </span>
    </div>
    <div className='corona__charts'>
      <div className='corona__charts__header'>
        <div className='corona__charts__header__right'>Morocco Situation</div>
        <div className='corona__charts__header__left'>
          <span className={classNames(
            'corona__charts__header__left__daily',
            {
              'corona__charts__header__left__daily__clicked': daily
            })}
          onClick={() => isDaily(true)}
          >Daily</span>
          <span className={classNames(
            'corona__charts__header__left__sum',
            {
              'corona__charts__header__left__sum__clicked': !daily
            })}
          onClick={() => isDaily(false)}
          >Sum</span>
        </div>
      </div>
      <div className='corona__charts__cases'>
        <div className='corona__charts__cases__left'>
          <div className='corona__charts__cases__left__number'>{coronaList.length > 0 ? 
            coronaList[coronaList.length - 1].cases : '#####'}</div>
          <div className='corona__charts__cases__left__text'>confirmed cases</div>
        </div>
        <div className='corona__charts__cases__right'>
          <HighchartsReact
            highcharts={Highcharts}
            options={highchartsCasesConfig(coronaList.map((element, index) => {
              if (index === 0 || !daily) return element.cases;
              return element.cases - coronaList[index - 1].cases;
            }),
            coronaList.map(item => moment.utc(item.createAt).format('D MMM')))}
          />
        </div>
      </div>
      <div className='corona__charts__deaths'>
        <div className='corona__charts__deaths__left'>
          <div className='corona__charts__deaths__left__number'>{coronaList.length > 0 ? 
            coronaList[coronaList.length - 1].deaths : '###'}</div>
          <div className='corona__charts__deaths__left__text'>deaths</div>
        </div>
        <div className='corona__charts__deaths__right'>
          <HighchartsReact
            highcharts={Highcharts}
            options={highchartsDeathsConfig(coronaList.map((element, index) => {
              if (index === 0 || !daily) return element.deaths;
              return element.deaths - coronaList[index - 1].deaths;
            }),
            coronaList.map(item => moment.utc(item.createAt).format('D MMM')))}
          />
        </div>
      </div>
      <div className='corona__charts__tip'>Tip: Click, Hold and Move to zoom in the charts</div>
    </div>
  </div>)};


export default Corona;