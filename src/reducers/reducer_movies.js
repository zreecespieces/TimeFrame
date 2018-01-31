import {FETCH_RUNTIME, FETCH_SCRIPT} from '../actions';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_RUNTIME:
      console.log(action.payload);
    case FETCH_SCRIPT:
      console.log(action.payload);
    default:
      return state;
  }
}
