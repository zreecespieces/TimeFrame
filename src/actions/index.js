import axios from 'axios';

const ROOT_URL = 'http://www.omdbapi.com/?apikey=eb9fc4d2&';

export function fetchRuntime(movie) {
  const url = `${ROOT_URL}t=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_RUNTIME,
    payload: request
  }
}
