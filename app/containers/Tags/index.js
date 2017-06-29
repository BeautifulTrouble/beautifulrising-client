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
const TagList = styled.ul`margin: 0; padding: 0; line-height: 1.2; margin-top: 12px;`;
const TagListItem = styled.li`
  display: inline;
  vertical-align: middle;
  &:last-child {
    span { display: none; }
  }
  ${p=>{
    if ( p.ar ) {
      return `font-family: ${p.selected ? 'Kaff Bold' : 'Kaff'};`;
    } else {
      return `font-family: ${p.selected ? 'Avenir Black' : 'Avenir'};`;
    }
  }}


  font-size: ${p=>p.ar?'13px':'12px'};
  line-height: ${p=>p.ar?'24px':'18px'};
  * { vertical-align: middle; }
  span {
    font-family: 'Avenir Black', 'Kaff Bold';
  }

  a {
    text-decoration: ${props=>props.selected ? 'normal' : 'underline'};
    color: ${props=>props.selected ? 'black' : '#828486'};
  }
`;

const TagLink = styled(Link)`
  font-size: 14px;
  line-height: 22px;
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
      <TagBlock align={this.props.align}>
        <TagList>
          {this.props.tags.map((item) => (
            <TagListItem ar={locale==='ar'} key={item.key} selected={item.key===selected}>
              <TagLink to={`/tag/${item.key}`}>{item.value}</TagLink>
              <TagDivider />
            </TagListItem>
          ))}
        </TagList>
      </TagBlock>
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
