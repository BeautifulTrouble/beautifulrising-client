  /*
 *
 * EmptyToolsMessage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';
import AdderRemover from 'containers/Tools/AdderRemover';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Container from 'components/EmptyToolsMessage/Container';
import CallToAction from 'components/EmptyToolsMessage/CallToAction';

import messages from './messages';
import staticText from './staticText';


export class EmptyToolsMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <LanguageThemeProvider>
        <Container>
          <TranslatableStaticText {...staticText.header} />
          <CallToAction>
            <TranslatableStaticText {...staticText.instruction}
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
