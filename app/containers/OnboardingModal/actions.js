import {
  USER_IS_ONBOARDED
} from './constants'

export function onboardUser() {
  return {
    type: USER_IS_ONBOARDED
  }
}
