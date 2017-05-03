/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const LOAD_DATA = 'App/constants/LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'App/constants/LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'App/constants/LOAD_DATA_ERROR';
export const ADD_TOOL = 'App/constants/ADD_TOOL';
export const REMOVE_TOOL = 'App/constants/REMOVE_TOOL';
