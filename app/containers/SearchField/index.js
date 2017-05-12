/*
 *
 * SearchField
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSearchField from './selectors';
import messages from './messages';
import {searchFieldChanged} from './actions';

import { browserHistory } from 'react-router';

const SearchContainer = styled.div``;
const SearchForm = styled.form``;
const SearchBox = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  font-size: 14px;
`;

let timeoutHandler = null;
export class SearchField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SearchContainer>
        <SearchForm>
          <SearchBox type='text' onChange={this.props.onChange} />
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
      }, 400);

    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
