/*
 * AskTheContributor Messages
 *
 * This contains all the text for the AskTheContributor component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.AskTheContributor.header',
    defaultMessage: 'QUESTIONS FOR THE CONTRIBUTOR?',
  },
  subheader: {
    id: 'app.containers.AskTheContributor.subheader',
    defaultMessage: 'Ask {author} here...',
  },
  questionPlaceholder: {
    id: 'app.containers.AskTheContributor.questionPlaceholder',
    defaultMessage: 'Type your question here',
  },
  emailPlaceholder: {
    id: 'app.containers.AskTheContributor.emailPlaceholder',
    defaultMessage: 'Enter your email for the contributor to get back to you',
  },
  submit: {
    id: 'app.containers.AskTheContributor.submit',
    defaultMessage: 'submit',
  }
});
