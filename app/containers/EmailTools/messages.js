/*
 * EmailTools Messages
 *
 * This contains all the text for the EmailTools component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.EmailTools.header',
    defaultMessage: 'Email Modules',
  },
  instruction: {
    id: 'app.containers.EmailTools.instruction',
    defaultMessage: 'Type your email below and send these modules to your inbox'
  },
  submit: {
    id: 'app.containers.EmailTools.submit',
    defaultMessage: 'submit'
  },
  complete: {
    id: 'app.containers.EmailTools.complete',
    defaultMessage: 'Email successfully sent! Please check your email'
  }
});
