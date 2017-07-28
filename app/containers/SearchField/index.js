/*
 *
 * SearchField
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import Isvg from 'react-inlinesvg';

import makeSelectSearchField from './selectors';
import messages from './messages';
import {searchFieldChanged} from './actions';
import { injectStaticText } from 'containers/TranslatableStaticText';
import SearchIcon from 'assets/images/icons/search.svg';
import staticText from './staticText';


const SearchContainer = styled.div`

    width: 100%;
    display: inline-block;
    border: none;

`;
const SearchForm = styled.form`
display: flex;
`;
const SearchBox = styled.input`
  flex-grow: 1;
  padding: 3px 10px 5px;
  // border: 2px solid black;
  font-size: ${p=>p.ar?'13px':'14px'};
  line-height: ${p=>p.ar?'24px':'22px'};
  font-style: italic;
  outline: none;
`;

let timeoutHandler = null;
export class SearchField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.filter === 'search') {
      ReactDOM.findDOMNode(this.refs['SearchBox']).value = this.props.label === undefined ? '' : this.props.label;
    }
  }

  handleSubmit(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.props.searchItems(ReactDOM.findDOMNode(this.refs['SearchBox']).value);
  }

  render() {
    const {locale} = this.props.intl;
    const {buildMessage} = this.props.translatable;
    return (
      <SearchContainer>
        <SearchForm onSubmit={this.handleSubmit.bind(this)}>
          <Isvg src={SearchIcon} />
          <SearchBox ref={'SearchBox'} ar={locale==='ar'} type='text' onChange={this.props.onChange} placeholder={buildMessage(staticText.placeholder)} />
        </SearchForm>
      </SearchContainer>
    );
  }
}

SearchField.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  SearchField: makeSelectSearchField(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: (evt) => {
      const text = evt.target.value;
      //Change browser
      clearTimeout(timeoutHandler);
      timeoutHandler = setTimeout(() => {

        dispatch(searchFieldChanged(text));
        browserHistory.push(`/search/${text}`);
      }, 500);

    },
    searchItems: (text) => {
      clearTimeout(timeoutHandler);
      browserHistory.push(`/search/${text}`);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(injectStaticText(SearchField)));
