/*
 *
 * ContactUs actions
 *
 */

import {
  DEFAULT_ACTION,
  SEND_SUBSCRIPTION,
  SUBSCRIPTION_COMPLETE,
  ERROR_SUBSCRIBING
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function sendSubscription(email) {
  return {
    type: SEND_SUBSCRIPTION,
    data: {
      email
    }
  }
}

export function subscriptionComplete() {
  
  return {
    type: SUBSCRIPTION_COMPLETE
  }
}

export function errorSubscribing() {
  return {
    type: ERROR_SUBSCRIBING
  }
}
