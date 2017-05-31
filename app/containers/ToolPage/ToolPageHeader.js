/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import AdderRemover from 'containers/Tools/AdderRemover';
import { ToolHeaderContainer, ToolHeaderViewport, ToolHeaderType,
          ToolHeaderTitle} from 'components/ToolsPageComponents';
import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';

// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export class ToolPageHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ToolHeaderContainer backgroundImage={BR_IMAGE_PREFIX+this.props.image}>
        <ToolHeaderViewport>
          <ToolHeaderType type={this.props.type}>{this.props.type}</ToolHeaderType>
          <ToolHeaderTitle color={'white'}>{this.props.title}</ToolHeaderTitle>
          <AdderRemover
            slug={this.props.slug}
            title={this.props.title}
            type={this.props.type}
            snapshot={this.props.snapshot}
            addText={(<FormattedMessage {...messages.addTool} />)}
            removeText={(<FormattedMessage {...messages.removeTool} />)}
          />
        </ToolHeaderViewport>
      </ToolHeaderContainer>
    );
  }
}

ToolPageHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(ToolPageHeader);
