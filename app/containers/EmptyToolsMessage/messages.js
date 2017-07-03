/*
 * EmptyToolsMessage Messages
 *
 * This contains all the text for the EmptyToolsMessage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.EmptyToolsMessage.header',
    defaultMessage: 'You can save your go-to tools here, so that the next time you access the toolbox you don’t need to go searching for them all over again.',
  },
  instruction: {
    id: 'app.containers.EmptyToolsMessage.instruction',
    defaultMessage: 'Click on the {icon} to save your favourite tools here. (No need to log in; your list will be here the next time you visit from the same device.)'
  }
});
