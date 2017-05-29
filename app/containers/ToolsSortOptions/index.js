/*
 *
 * ToolsSortOptions
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectToolsSortOptions from './selectors';
import { changeSortOption } from './actions';
import { SORT_NEWEST, SORT_ALPHABETICAL } from './constants';
import messages from './messages';

import {TextButton} from 'components/CommonComponents';

import IconButton from 'components/IconButton';

export class ToolsSortOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <IconButton width="49%" onClick={this.props.clickAlphabeticalSort}>
          <TextButton selected={this.props.ToolsSortOptions.chosen === SORT_ALPHABETICAL}>
            <FormattedMessage {...messages.alphabeticalButton} />
          </TextButton>
        </IconButton>
        <IconButton width="49%" onClick={this.props.clickNewestSort}>
          <TextButton selected={this.props.ToolsSortOptions.chosen === SORT_NEWEST}>
            <FormattedMessage {...messages.newestButton} />
          </TextButton>
        </IconButton>
      </div>
    );
  }
}

ToolsSortOptions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ToolsSortOptions: makeSelectToolsSortOptions(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    clickAlphabeticalSort: (evt) => {
      dispatch(changeSortOption(SORT_ALPHABETICAL))
    },
    clickNewestSort: (evt) => {
      dispatch(changeSortOption(SORT_NEWEST))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsSortOptions);
