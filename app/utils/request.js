import 'whatwg-fetch';
import { PRODUCTION_ENDPOINT, DEVELOPMENT_ENDPOINT } from 'components/CommonComponents/constants';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {

  if (response.type == 'opaque') {
    return true;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {

  if (response.status >= 200 && response.status < 300 || response.type == 'opaque') {

    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function getEndpoint(lang = 'en') {
    return `${PRODUCTION_ENDPOINT}?lang=${lang}&orderby=title`;
    // if (process.env.NODE_ENV === 'production') {
    //   return `${PRODUCTION_ENDPOINT}?lang=${lang}`;
    // } else {
    //   return `${DEVELOPMENT_ENDPOINT}?lang=${lang}`;;
    // }
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
