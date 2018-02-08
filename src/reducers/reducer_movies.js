import {FETCH_RUNTIME, FETCH_SCRIPT} from '../actions';
import cheerio from 'cheerio';
import stringOccurrence from 'string-occurrence';
import _ from 'lodash';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_RUNTIME:
      console.log(_.get(action.payload.data, 'Runtime'));
    case FETCH_SCRIPT:
      const $ = cheerio.load(action.payload.data);
      const script = $('pre').text();
      const keywordOccurence = stringOccurrence(script, 'space');
      console.log(keywordOccurence);
    default:
      return state;
  }
}
