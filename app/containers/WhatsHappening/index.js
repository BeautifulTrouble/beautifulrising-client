/*
 *
 * WhatsHappening
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectWhatsHappening from './selectors';

export class WhatsHappening extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="BeautifulRising – What's Happening"
          meta={[
            { name: 'description', content: 'What\'s Happening' },
          ]}
        />
      </div>
    );
  }
}

WhatsHappening.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WhatsHappening: makeSelectWhatsHappening(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatsHappening);
