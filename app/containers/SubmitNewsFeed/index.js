/*
 *
 * SubmitNewsFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import Recaptcha from 'react-google-invisible-recaptcha';

import { RECAPTCHA_SITE_KEY } from 'components/CommonComponents/constants';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import makeSelectSubmitNewsFeed from './selectors';
import messages from './messages';
import { submitHashtag } from './actions';

const Header = styled(ContentBlock)`
  font-weight: 800;
  color: black;
  margin: 10px 0;
`;

const FormContainer = styled(ContentBlock)`
  border: 1px solid;
  padding: 8px;

  input[type=email] {
    width: calc(100% - 50px);
    outline: none;
    padding: 2px;
    text-align: ${p=>p.theme.ar ? 'right' : 'left'};
  }
  button {
    outline: none;
    width: auto;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    color: #828486;
    float: ${p=>p.theme.ar ? 'left' : 'right'};
  }
`;
export class SubmitNewsFeed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hashtag: ''
    };
  }

  handleChange(evt) {
    this.setState({ hashtag: evt.target.value });
  }

  handleSubmit(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.recaptcha.execute();
  }

  handleRecaptcha(resp) {

    this.props.onFormSubmit({...this.state, captcha: resp});
  }

  renderForm() {
    return (
      <FormContainer lang={this.props.intl.locale}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='hashtag' name='hashtag' onChange={this.handleChange.bind(this)} placeholder='#'/>
          <button>
            <FormattedMessage {...messages.submit} />
          </button>
          <Recaptcha
            ref={ ref=> this.recaptcha = ref }
            sitekey={ RECAPTCHA_SITE_KEY }
            onResolved={this.handleRecaptcha.bind(this)}
          />
        </form>
      </FormContainer>

    );
  }

  render() {
    const { locale } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <Header>
          <FormattedMessage {...messages.header} />
          { this.renderForm() }
        </Header>
      </LanguageThemeProvider>
    );
  }
}

SubmitNewsFeed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SubmitNewsFeed: makeSelectSubmitNewsFeed(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormSubmit: (options) => {
      dispatch(submitHashtag(options));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SubmitNewsFeed));
