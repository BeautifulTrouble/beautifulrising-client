/*
 * ShareButton Messages
 *
 * This contains all the text for the ShareButton component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  share: {
    id: 'app.components.ShareButton.header',
    defaultMessage: 'Share',
  },
  emailMessage: {
    id: 'app.components.ShareButton.emailMessage',
    defaultMessage: 'Check out this awesome tool from BeautifulRising.org {url}'
  },
  emailSubject: {
    id: 'app.components.ShareButton.emailSubject',
    defaultMessage: 'Read about "{title}" at BeautifulRising.org'
  }
});
