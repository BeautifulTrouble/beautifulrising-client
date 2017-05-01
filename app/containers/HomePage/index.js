/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Tags from 'containers/Tags';
import { makeSelectAllTools, makeSelectToolById,
          makeSelectData, makeSelectLoading,
          makeSelectError } from 'containers/App/selectors';

import { loadData } from '../App/actions';
import makeSelectHomePage from './selectors';
import messages from './messages';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />

        <Tags />
      </div>
    );
  }
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tools: makeSelectAllTools()
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
