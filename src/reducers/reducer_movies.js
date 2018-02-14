import {FETCH_RUNTIME, FETCH_SCRIPT} from '../actions';
import _ from 'lodash';

export default function (state = {runtimes: [], keywords: [] }, action) {
  switch(action.type) {
    case FETCH_RUNTIME:
      const runtime = parseInt(_.get(action.payload.data, 'Runtime'));
      const newState = {
        ...state,
        runtimes: [runtime, ...state.runtimes]
      };
      return newState;
    case FETCH_SCRIPT:
      const keyword = action.payload;
      const newerState = {
        ...state,
        keywords: [keyword, ...state.keywords]
      };
      return newerState;
    default:
      return state;
  }
}
