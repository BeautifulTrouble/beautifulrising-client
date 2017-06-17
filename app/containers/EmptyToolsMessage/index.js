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
const Container = styled.div`
  padding: 10px;
  * {
    font-size: 14px;
    line-height: 22px;
  }
`;

const CallToAction = styled.div`
  font-weight: bold;
`;
export class EmptyToolsMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
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
