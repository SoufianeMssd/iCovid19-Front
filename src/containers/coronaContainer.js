// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import Corona from '../components/corona';
import type {CoronaType} from '../storeTypes/corona';
import fetchCoronaList from '../middleware/coronaList';
import {List} from 'immutable';

type Props = {
  coronaList: List<CoronaType>,
  fetchCoronaList: Function
}

class CoronaContainer extends React.Component<Props> {
  componentDidMount() {
    const {fetchCoronaList} = this.props;
    fetchCoronaList();
  }

  render () {
    const {coronaList} = this.props;
    return (
      <Corona coronaList={coronaList} />
    );
  }
}

const mapStateToProps = (state) => ({'coronaList': state.coronaList.get('coronaList')});

const mapDispatchToProps = ({'fetchCoronaList': fetchCoronaList});

export default connect(mapStateToProps, mapDispatchToProps)(CoronaContainer);
