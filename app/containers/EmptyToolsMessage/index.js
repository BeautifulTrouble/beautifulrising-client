  /*
 *
 * EmptyToolsMessage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';
import AdderRemover from 'containers/Tools/AdderRemover';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
const Container = styled(ContentBlock)`
  padding: 10px;
`;

const CallToAction = styled(ContentBlock)`
  font-weight: 800;
`;
export class EmptyToolsMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <LanguageThemeProvider>
        <Container>
          <FormattedMessage {...messages.header} />
          <CallToAction>
            <FormattedMessage {...messages.instruction}
              values={{
                icon: (<AdderRemover color={'black'} slug={null}/>)
              }}
            />
          </CallToAction>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

EmptyToolsMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(EmptyToolsMessage);
