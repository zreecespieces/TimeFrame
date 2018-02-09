import axios from 'axios';
import cheerio from 'cheerio';
import stringOccurrence from 'string-occurrence';

const RUNTIME_URL = 'http://www.omdbapi.com/?apikey=eb9fc4d2&';
const SCRIPT_URL = 'http://www.imsdb.com/scripts/';

export const FETCH_RUNTIME = 'FETCH_RUNTIME';
export const FETCH_SCRIPT = 'FETCH_SCRIPT';

export function fetchRuntime(movie, callback) {
  const url = `${RUNTIME_URL}t=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_RUNTIME,
    payload: request
  }
}

export function fetchScript(movie, keyword, callback) {
  const url = `${SCRIPT_URL}${movie}.html`;
  const request = axios.get(url).then(response => {
    const $ = cheerio.load(response.data);
    const script = $('pre').text();
    const keywordOccurence = stringOccurrence(script, keyword);
    return keywordOccurence;
  });

  return {
    type: FETCH_SCRIPT,
    payload: request
  }
}
