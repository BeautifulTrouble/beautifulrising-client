/*
 *
 * Tags
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
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
const TagList = styled.ul`margin: 0; padding: 0; line-height: 1.2;`;
const TagListItem = styled.li`
  display: inline;
  vertical-align: middle;
  &:last-child {
    span { display: none; }
  }
  font-size: 12px;
  line-height: 18px;
  * { vertical-align: middle; }
  span {
    font-family: 'Avenir Black', 'Kaff Bold';
  }
`;

const TagLink = styled(Link)`
  font-size: 12px;
  color: #828486;
  text-decoration: underline;
  vertical-align: middle;
`;

const TagDivider = styled(() => (<span> / </span>))`
  vertical-align: middle;
  display: inline-block;
`;
export class Tags extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <TagBlock align={this.props.align}>
        <TagList>
          {this.props.tags.map((item) => (
            <TagListItem key={item.key}>
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
export default connect(mapStateToProps)(Tags);
