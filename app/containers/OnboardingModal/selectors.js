import Immutable, { OrderedSet, Map, List } from 'immutable';
import { createSelector } from 'reselect';
import {slugify} from 'utils/tags';

const selectOnboardingModal = (state) => state.get('onboardingModal');

const isOnboarded = () => createSelector(
  selectOnboardingModal,
  (modalState) => {
    return modalState.get('onboarded');
  }
)

export {
  isOnboarded
};
