import axios from 'axios';

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
  const request = axios.get(url);

  return {
    type: FETCH_SCRIPT,
    payload: request
  }
}
