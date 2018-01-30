import axios from 'axios';

const ROOT_URL = 'http://www.omdbapi.com/?apikey=eb9fc4d2&';

export const FETCH_RUNTIME = 'FETCH_RUNTIME';

export function fetchRuntime(movie, callback) {
  const url = `${ROOT_URL}t=${movie}`;
  const request = axios.get(url)
  .then(() => callback());

  return {
    type: FETCH_RUNTIME,
    payload: request
  }
}
