/*
 *
 * ToolsViewOptions
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
// import makeSelectToolsViewOptions from './selectors';


import IconButton from 'components/IconButton';

import { LIST_VIEW, BLOCK_VIEW } from './constants'
import { changeToolView } from './actions';

import { makeSelectToolView } from './selectors';
import messages from './messages';

export class ToolsViewOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <div>
        <h1>{this.props.view}
        </h1>
        <IconButton onClick={this.props.clickListView}>
          List View Button
        </IconButton>
        <IconButton onClick={this.props.clickBlockView}>
          Block View Button
        </IconButton>

      </div>
    );
  }
}

ToolsViewOptions.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // view: makeSelectToolView()
});

function mapDispatchToProps(dispatch) {
  return {
    clickListView: (evt) => {
      dispatch(changeToolView(LIST_VIEW));
    },
    clickBlockView: (evt) => {
      dispatch(changeToolView(BLOCK_VIEW));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsViewOptions);
