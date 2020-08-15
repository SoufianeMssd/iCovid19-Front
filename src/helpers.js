/* eslint-disable no-magic-numbers */
import Highcharts from 'highcharts';

// Social contacts
export const facebook = 'https://facebook.com/SoufianeMssd';
export const linkedIn = 'https://linkedin.com/in/soufianemssd/';
export const twitter = 'https://twitter.com/SoufianeMssd';

// external api
export const extURL = 'http://localhost:3001'

// highcharts configs
export const highchartsCasesConfig = (cases: Number, date: String) => ({
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
      data: cases,
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
            return Highcharts.numberFormat(this.value / 1000, 1) + 'K';
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
      categories: date,
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
});

export const highchartsDeathsConfig = (deaths: Number, date: String) => ({
  chart: {
    type: 'column',
    zoomType: 'x',
    backgroundColor: 'transparent',
    marginLeft: 20
  },
  title: {
    text: ''
  }   ,
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
      data: deaths,
      color: 'rgb(175, 173, 173)',
      name: 'Deaths',
      showInLegend: false
    }
  ],
  legend: {
    align: 'center',
    verticalAlign: 'top'
  }   ,
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
      categories: date,
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
});
