/*
 *
 * StaticTextHandler
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectStaticTextHandler from './selectors';

export class StaticTextHandler extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // This page is to flush the text
  render() {
    return (
      <div>
      </div>
    );
  }
}

StaticTextHandler.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  StaticTextHandler: makeSelectStaticTextHandler(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticTextHandler);
