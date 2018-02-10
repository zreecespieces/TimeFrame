import {FETCH_RUNTIME, FETCH_SCRIPT} from '../actions';
import _ from 'lodash';

export default function (state = {runtimes: [], keywords: [] }, action) {
  switch(action.type) {
    case FETCH_RUNTIME:
      const runtime = _.get(action.payload.data, 'Runtime');
      console.log(runtime);
      const newState = {...state};
      newState.runtimes.push(runtime);
      console.log(newState);
      return newState;
    case FETCH_SCRIPT:
      console.log(action.payload);
    default:
      return state;
  }
}
