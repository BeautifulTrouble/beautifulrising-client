/*
 * SubmitRealWorldExample Messages
 *
 * This contains all the text for the SubmitRealWorldExample component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.SubmitRealWorldExample.header',
    defaultMessage: 'Have you seen or used this {type}?',
  },
  url: {
    id: 'app.containers.SubmitRealWorldExample.url',
    defaultMessage: 'copy + paste the url of the video, image, gif, audio'
  },
  title: {
    id: 'app.containers.SubmitRealWorldExample.title',
    defaultMessage: 'Give a short title for your example'
  },
  description: {
    id: 'app.containers.SubmitRealWorldExample.description',
    defaultMessage: 'A brief description (150 characters)'
  },
  instruction: {
    id: 'app.containers.SubmitRealWorldExample.instruction',
    defaultMessage: 'Great! Share that experience with us in the form of a link and if it’s a solid example we’ll feature it in the section above'
  },
  submit: {
    id: 'app.containers.SubmitRealWorldExample.submit',
    defaultMessage: 'Submit'
  }
});
