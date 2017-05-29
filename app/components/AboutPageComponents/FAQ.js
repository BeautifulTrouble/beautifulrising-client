/**
*
* AboutPageComponents
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import messages from './messages';

function FAQ() {
  return (
    <AboutSection id='faq'>
      <h2>
        <FormattedMessage {...messages.faqHeader} />
      </h2>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

FAQ.propTypes = {

};

export default FAQ;
