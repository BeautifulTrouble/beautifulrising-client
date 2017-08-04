/*
 *
 * ToolsSortOptions
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';

import makeSelectToolsSortOptions from './selectors';
import { changeSortOption } from './actions';
import { SORT_NEWEST, SORT_ALPHABETICAL } from './constants';

import {TextButton} from 'components/CommonComponents';
import IconButton from 'components/IconButton';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';

const Container = styled.div`
  display: inline-block;
  width: auto;
`;
const SortButton = styled(IconButton)`
  margin-${p=>p.isArabic?'right':'left'}: ${p=>p.last?'24px':'0'};
`

export class ToolsSortOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { locale } = this.props.intl;
    return (
      <Container>
        <SortButton isArabic={locale==='ar'} width="auto" onClick={this.props.clickAlphabeticalSort}>
          <TextButton ar={locale==='ar'} selected={this.props.ToolsSortOptions.chosen === SORT_ALPHABETICAL}>
            <TranslatableStaticText {...staticText.alphabeticalButton} />
          </TextButton>
        </SortButton>
        <SortButton isArabic={locale==='ar'} last={true} width="auto" onClick={this.props.clickNewestSort}>
          <TextButton selected={this.props.ToolsSortOptions.chosen === SORT_NEWEST}>
            <TranslatableStaticText {...staticText.newestButton} />
          </TextButton>
        </SortButton>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ToolsSortOptions));
