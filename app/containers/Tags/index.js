/*
 *
 * Tags
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectAllTags } from 'containers/App/selectors';
import { push } from 'react-router-redux';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import MenuBlock from 'components/MenuBlock';
import MenuTitle from 'components/MenuTitle';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import Link from 'components/Link';
import ClearButton from 'components/ClearButton';

import {slugify} from 'utils/tags'

import makeSelectTags from './selectors';
import messages from './messages';

import styled from 'styled-components';

const TagBlock = styled(ContentBlock)`
  text-align: ${props=>props.align || 'center'}`
;
const TagList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 12px;
`;
const TagListItem = styled.li`
  display: inline;
  vertical-align: middle;
  &:last-child {
    span { display: none; }
  }
  font-family: Avenir, Kaff;
  font-weight: ${p=>p.selected ? 800 : 400 };

  * { vertical-align: middle; }
  span {
    font-weight: 800; font-family: 'Avenir', 'Kaff';
  }

  a {
    text-decoration: ${props=>props.selected ? 'normal' : 'underline'};
    color: ${props=>props.selected ? 'black' : '#828486'};
  }
`;

const TagLink = styled(Link)`
  vertical-align: middle;
`;

const TagDivider = styled(() => (<span> / </span>))`
  vertical-align: middle;
  display: inline-block;
`;

const ClearButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
  color: #828486;
  button {
    padding-right: 0;
    padding-left: 0;
  }
`;
export class Tags extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleClearTags() {
    this.props.dispatch(push('/'));
  }

  renderClearButton() {
    const selected = this.props.params ? this.props.params.label : '';
    if (!selected || selected === undefined) return null;

    return (
      <ClearButtonContainer>
        <ClearButton onClick={this.handleClearTags.bind(this)}>
          <FormattedMessage {...messages.clearTags} />
        </ClearButton>
      </ClearButtonContainer>
    );

  }
  render() {
    const selected = this.props.params ? this.props.params.label : '';
    const { locale } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <TagBlock align={this.props.align}>
          <TagList>
            {this.props.tags.map((item) => (
              <TagListItem ar={locale==='ar'} key={item.key} selected={item.key===selected}>
                <TagLink to={`/tag/${item.key}`}>{item.value}</TagLink>
                <TagDivider />
              </TagListItem>
            ))}
          </TagList>
          { this.props.showClear ? this.renderClearButton() : null }
        </TagBlock>
      </LanguageThemeProvider>
    );
  }
}

Tags.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // tags: PropTypes.array.isRequired
  //   tags: PropTypes.array.isRequired,
  // },
};

const mapStateToProps = (state, props) => {
  return {
    tags: makeSelectAllTags(state, props)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(Tags);
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Tags));
