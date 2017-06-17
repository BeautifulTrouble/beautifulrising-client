/*
 *
 * EmailTools actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_EMAIL,
  EMAIL_COMPLETE,
  ERROR_SENDING_EMAIL,
  EMAIL_CLEAR_ALL
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function emailModules(email) {
  console.log("1");
  return {
    type: REQUEST_EMAIL,
    data: { email }
  }
}

export function emailModulesComplete() {
  return {
    type: EMAIL_COMPLETE
  }
}

export function emailClearAll() {
  return {
    type: EMAIL_CLEAR_ALL
  }
}

export function emailModulesError() {
  return {
    type: ERROR_SENDING_EMAIL
  }
}
