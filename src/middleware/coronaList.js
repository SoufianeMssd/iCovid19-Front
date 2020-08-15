import axios from 'axios';
import {GetCoronaList, GetCoronaListSuccess, GetCoronaListError} from '../actions/corona';
import {extURL} from '../helpers';
import {CoronaFactory} from '../storeTypes/corona';

const fetchCoronaList = () => {
  return async dispatch => {
    dispatch(GetCoronaList());
    try {
      const response = await axios.get(`${extURL}/corona`);
      dispatch(GetCoronaListSuccess(response.data.map(item => CoronaFactory(item))));
    } catch (err) {
      dispatch(GetCoronaListError('Error in fetching Corona data'));
    }
  }
}

export default fetchCoronaList;