/* eslint-disable no-magic-numbers */
// @flow
import * as React from 'react';
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './style.scss';
import arrowIcon from '../../resources/images/arrow-right.png';
import flagIcon from '../../resources/images/flagMorocco.png';
import coverIcon from '../../resources/images/ppl-masks.jpeg';
import clockIcon from '../../resources/images/clockY.png';

const optionCases = {
  chart: {
    type: 'column',
    zoomType: 'x',
    backgroundColor: 'transparent',
    marginLeft: 20
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  tooltip: {
    backgroundColor: 'white',
    borderColor: 'rgb(0, 147, 213)',
    borderRadius: 10,
    borderWidth: 1,
    zIndex: 3
  },
  series: [
    {
      data: [
        0,1,0,0,1,0,0,0,0,1,3,0,1,11,
        10,9,7,10,9,23,10,19,28,
        27,55,50,70,57,77,77,61,
        37,54,83,128,102,99,64,
        91,99,74,97,116,102,125,
        136,259,281,121,170,191,
        163,237,122,190,139,168,
        55,132,69,102,146,160,
        174,150,166,189,140,163,
        199,153,218,137,94,95,45,
        89,129,82,71,110,78,121,
        74,27,99,45,24,42,71,66,
        27,26,33,56,81,68,80,73,
        78,135,71,29,73,82,101,92,
        46,66,77,539,226,138,195,
        172,563,431,295,244,175,238,
        243,103,333,319,534,393,164,
        228,164,308,249,214,203,191,
        161,165,283,181,289,221,326,
        180,220,302,570,811,633,609,
        500,826,1046,1063,693,522,659,
        1021,1283,1144,1018,1345,1230,826],
      color: 'rgb(175, 173, 173)',
      name: 'Confirmed Cases',
      showInLegend: false
    }
  ],
  legend: {
    align: 'center',
    verticalAlign: 'top'
  },
  plotOptions: {
    column: {
      states: {
        hover: {
          color: 'rgb(0, 147, 213)'
        }
      },
      borderRadius: '2px'
    },
    series: {
      groupPadding: 0.09,
      borderWidth: 0
    }
  },
  yAxis: [
    {
      // Primary yAxis
      gridLineWidth: 0,
      labels: {
        style: {
          color: 'rgb(71, 71, 71)'
        },
        formatter: function () {
          if (this.value >= 1000)
            return Highcharts.numberFormat(this.value / 1000, 1) + 'K'; // maybe only switch if > 1000
          return Highcharts.numberFormat(this.value, 0);
        }
      },
      title: {
        text: '',
        style: {
          color: 'rgb(71, 71, 71)'
        }
      },
      opposite: true
    }
  ],
  xAxis: [
    {
      // Primary xAxis
      categories: [
        'Mar 01','Mar 02','Mar 03','Mar 04','Mar 05','Mar 06',
        'Mar 07','Mar 08','Mar 09','Mar 10','Mar 11',
        'Mar 12','Mar 13','Mar 14','Mar 15','Mar 16',
        'Mar 17','Mar 18','Mar 19','Mar 20','Mar 21',
        'Mar 22','Mar 23','Mar 24','Mar 25','Mar 26',
        'Mar 27','Mar 28','Mar 29','Mar 30','Mar 31',
        'Apr 01','Apr 02','Apr 03','Apr 04','Apr 05',
        'Apr 06','Apr 07','Apr 08','Apr 09','Apr 10',
        'Apr 11','Apr 12','Apr 13','Apr 14','Apr 15',
        'Apr 16','Apr 17','Apr 18','Apr 19','Apr 20',
        'Apr 21','Apr 22','Apr 23','Apr 24','Apr 25',
        'Apr 26','Apr 27','Apr 28','Apr 29','Apr 30',
        'May 01','May 02','May 03','May 04','May 05',
        'May 06','May 07','May 08','May 09','May 10',
        'May 11','May 12','May 13','May 14','May 15',
        'May 16','May 17','May 18','May 19','May 20',
        'May 21','May 22','May 23','May 24','May 25',
        'May 26','May 27','May 28','May 29','May 30',
        'May 31','Jun 01','Jun 02','Jun 03','Jun 04',
        'Jun 05','Jun 06','Jun 07','Jun 08','Jun 09',
        'Jun 10','Jun 11','Jun 12','Jun 13','Jun 14',
        'Jun 15','Jun 16','Jun 17','Jun 18','Jun 19',
        'Jun 20','Jun 21','Jun 22','Jun 23','Jun 24',
        'Jun 25','Jun 26','Jun 27','Jun 28','Jun 29',
        'Jun 30','Jul 01','Jul 02','Jul 03','Jul 04',
        'Jul 05','Jul 06','Jul 07','Jul 08','Jul 09',
        'Jul 10','Jul 11','Jul 12','Jul 13','Jul 14',
        'Jul 15','Jul 16','Jul 17','Jul 18','Jul 19',
        'Jul 20','Jul 21','Jul 22','Jul 23','Jul 24',
        'Jul 25','Jul 26','Jul 27','Jul 28','Jul 29',
        'Jul 30','Jul 31','Aug 01','Aug 02','Aug 03',
        'Aug 04','Aug 05','Aug 06','Aug 07','Aug 08',
        'Aug 09','Aug 10'],
      lineColor: 'transparent',
      startOnTick: false,
      gridLineWidth: 0,
      labels: {
        format: '{value}',
        style: {
          color: 'rgb(71, 71, 71)'
        },
        step: 30
      },
      title: {
        style: {
          color: 'rgb(71, 71, 71)'
        }
      }
    }
  ]
};

const deathsCases = {
  chart: {
    type: 'column',
    zoomType: 'x',
    backgroundColor: 'transparent',
    marginLeft: 20
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  tooltip: {
    backgroundColor: 'white',
    borderColor: 'rgb(216, 100, 34)',
    borderRadius: 10,
    borderWidth: 1,
    zIndex: 3
  },
  series: [
    {
      data: [
        0,0,0,0,0,0,0,0,0,
        1,0,0,0,0,0,0,1,0,
        0,1,0,1,0,1,1,5,12,
        2,1,7,3,3,5,4,11,11,
        10,10,3,4,10,4,7,8,
        0,1,3,5,2,4,2,2,4,6,
        3,1,2,1,3,3,2,1,2,1,
        5,2,2,0,3,0,2,0,0,0,
        2,0,2,0,0,1,1,2,1,1,
        1,1,2,0,0,0,2,1,0,1,
        0,2,0,0,0,0,2,1,0,1,
        0,0,0,0,1,0,0,0,1,0,
        0,2,1,1,2,1,4,3,0,1,
        1,2,3,2,3,2,0,1,2,5,
        5,2,2,4,1,5,4,3,4,5,
        7,7,6,8,3,11,7,12,7,
        14,15,19,16,18,14,12,
        19,18,18],
      color: 'rgb(175, 173, 173)',
      name: 'Deaths',
      showInLegend: false
    }
  ],
  legend: {
    align: 'center',
    verticalAlign: 'top'
  },
  plotOptions: {
    column: {
      states: {
        hover: {
          color: 'rgb(216, 100, 34)'
        }
      },
      borderRadius: '2px'
    },
    series: {
      groupPadding: 0.09,
      borderWidth: 0
    }
  },
  yAxis: [
    {
      // Primary yAxis
      gridLineWidth: 0,
      labels: {
        style: {
          color: 'rgb(71, 71, 71)'
        },
        formatter: function () {
          if (this.value >= 1000)
            return Highcharts.numberFormat(this.value / 1000, 1) + 'K'; // maybe only switch if > 1000
          return Highcharts.numberFormat(this.value, 0);
        }
      },
      title: {
        text: '',
        style: {
          color: 'rgb(71, 71, 71)'
        }
      },
      opposite: true,
    }
  ],
  xAxis: [
    {
      // Primary xAxis
      categories: [
        'Mar 01','Mar 02','Mar 03','Mar 04','Mar 05','Mar 06',
        'Mar 07','Mar 08','Mar 09','Mar 10','Mar 11',
        'Mar 12','Mar 13','Mar 14','Mar 15','Mar 16',
        'Mar 17','Mar 18','Mar 19','Mar 20','Mar 21',
        'Mar 22','Mar 23','Mar 24','Mar 25','Mar 26',
        'Mar 27','Mar 28','Mar 29','Mar 30','Mar 31',
        'Apr 01','Apr 02','Apr 03','Apr 04','Apr 05',
        'Apr 06','Apr 07','Apr 08','Apr 09','Apr 10',
        'Apr 11','Apr 12','Apr 13','Apr 14','Apr 15',
        'Apr 16','Apr 17','Apr 18','Apr 19','Apr 20',
        'Apr 21','Apr 22','Apr 23','Apr 24','Apr 25',
        'Apr 26','Apr 27','Apr 28','Apr 29','Apr 30',
        'May 01','May 02','May 03','May 04','May 05',
        'May 06','May 07','May 08','May 09','May 10',
        'May 11','May 12','May 13','May 14','May 15',
        'May 16','May 17','May 18','May 19','May 20',
        'May 21','May 22','May 23','May 24','May 25',
        'May 26','May 27','May 28','May 29','May 30',
        'May 31','Jun 01','Jun 02','Jun 03','Jun 04',
        'Jun 05','Jun 06','Jun 07','Jun 08','Jun 09',
        'Jun 10','Jun 11','Jun 12','Jun 13','Jun 14',
        'Jun 15','Jun 16','Jun 17','Jun 18','Jun 19',
        'Jun 20','Jun 21','Jun 22','Jun 23','Jun 24',
        'Jun 25','Jun 26','Jun 27','Jun 28','Jun 29',
        'Jun 30','Jul 01','Jul 02','Jul 03','Jul 04',
        'Jul 05','Jul 06','Jul 07','Jul 08','Jul 09',
        'Jul 10','Jul 11','Jul 12','Jul 13','Jul 14',
        'Jul 15','Jul 16','Jul 17','Jul 18','Jul 19',
        'Jul 20','Jul 21','Jul 22','Jul 23','Jul 24',
        'Jul 25','Jul 26','Jul 27','Jul 28','Jul 29',
        'Jul 30','Jul 31','Aug 01','Aug 02','Aug 03',
        'Aug 04','Aug 05','Aug 06','Aug 07','Aug 08',
        'Aug 09','Aug 10'
      ],
      lineColor: 'transparent',
      startOnTick: false,
      gridLineWidth: 0,
      labels: {
        format: '{value}',
        style: {
          color: 'rgb(71, 71, 71)',
          paddingLeft: '14px'
        },
        step: 24
      },
      title: {
        style: {
          color: 'rgb(71, 71, 71)'
        }
      }
    }
  ]
};

const Corona = () => (<div className='corona'>
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
    <span className='corona__text__blue'> 33,237 confirmed cases</span> of COVID-19 with 
    <span className='corona__text__orange'> 498 deaths</span>.</div>
  <div className='corona__title'>
    <img alt='corona__title__image' className='corona__title__image' src={clockIcon} />
    <span className='corona__title__text'>Today</span>
  </div>
  <div className='corona__new'>
    <span className='corona__new__cases'>
      <div className='corona__new__cases__title'>Cases</div>
      <div className='corona__new__cases__value'>+1139</div>
    </span>
    <span className='corona__new__recovered'>
      <div className='corona__new__recovered__title'>Recovered</div>
      <div className='corona__new__recovered__value'>+1030</div>
    </span>
    <span className='corona__new__deaths'>
      <div className='corona__new__deaths__title'>Deaths</div>
      <div className='corona__new__deaths__value'>+13</div>
    </span>
  </div>
  <div className='corona__charts'>
    <div className='corona__charts__header'>Morocco Situation</div>
    <div className='corona__charts__cases'>
      <div className='corona__charts__cases__left'>
        <div className='corona__charts__cases__left__number'>33,237</div>
        <div className='corona__charts__cases__left__text'>confirmed cases</div>
      </div>
      <div className='corona__charts__cases__right'>
        <HighchartsReact highcharts={Highcharts} options={optionCases} />
      </div>
    </div>
    <div className='corona__charts__deaths'>
      <div className='corona__charts__deaths__left'>
        <div className='corona__charts__deaths__left__number'>498</div>
        <div className='corona__charts__deaths__left__text'>deaths</div>
      </div>
      <div className='corona__charts__deaths__right'>
        <HighchartsReact highcharts={Highcharts} options={deathsCases} />
      </div>
    </div>
    <div className='corona__charts__tip'>Tip: Click, Hold and Move to zoom in the charts</div>
  </div>
</div>);


export default Corona;