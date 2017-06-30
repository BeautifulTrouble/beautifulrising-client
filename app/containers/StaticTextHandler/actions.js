import {
  LOAD_STATIC_TEXT,
  LOAD_STATIC_TEXT_SUCCESS,
  LOAD_STATIC_TEXT_ERROR
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadStaticText() {
  return {
    type: LOAD_STATIC_TEXT,
  };
}

export function staticTextLoaded(data) {
  
  return {
    type: LOAD_STATIC_TEXT_SUCCESS,
    data
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_DATA_ERROR passing the error
 */
export function staticTextLoadingError(error) {
  return {
    type: LOAD_STATIC_TEXT_ERROR,
    error,
  };
}
