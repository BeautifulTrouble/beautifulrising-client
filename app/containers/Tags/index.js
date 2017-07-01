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

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import MenuBlock from 'components/MenuBlock';
import MenuTitle from 'components/MenuTitle';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import Link from 'components/Link';

import {slugify} from 'utils/tags'

import makeSelectTags from './selectors';
import messages from './messages';

import styled from 'styled-components';

const TagBlock = styled.div`
  text-align: ${props=>props.align || 'center'}`
;
const TagList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 12px;
  text-align: center;
`;
const TagListItem = styled.li`
  display: inline;
  vertical-align: middle;
  &:last-child {
    span { display: none; }
  }
  font-family: 'Avenir, Kaff';
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
export class Tags extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const selected = this.props.params ? this.props.params.label : '';
    const { locale } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <TagBlock align={this.props.align}>
          <ContentBlock>
            <TagList>
              {this.props.tags.map((item) => (
                <TagListItem ar={locale==='ar'} key={item.key} selected={item.key===selected}>
                  <TagLink to={`/tag/${item.key}`}>{item.value}</TagLink>
                  <TagDivider />
                </TagListItem>
              ))}
            </TagList>
          </ContentBlock>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Tags);
export default connect(mapStateToProps)(injectIntl(Tags));
