import {FETCH_RUNTIME, FETCH_SCRIPT} from '../actions';
import _ from 'lodash';

export default function (state = {runtimes: [], keywords: [] }, action) {
  switch(action.type) {
    case FETCH_RUNTIME:
      const runtime = parseInt(_.get(action.payload.data, 'Runtime'));
      const newState = {
        ...state,
        runtimes: [...state.runtimes, runtime]
      };
      console.log(newState);
      return newState;
    case FETCH_SCRIPT:
      const keyword = action.payload;
      const newerState = {...state};
      newerState.keywords.push(keyword);
      console.log(newerState);
      return newerState;
    default:
      return state;
  }
}
