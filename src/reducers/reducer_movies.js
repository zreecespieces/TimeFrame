import {FETCH_RUNTIME, FETCH_SCRIPT} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_RUNTIME:
      console.log(_.get(action.payload, 'Runtime'));
    case FETCH_SCRIPT:
      console.log(action.payload)
    default:
      return state;
  }
}
