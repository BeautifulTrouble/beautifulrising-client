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

const TagBlock = styled.div``;
const TagList = styled.ul`margin: 0; padding: 0;`;
const TagListItem = styled.li`display: inline-block;`;
export class Tags extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <TagBlock>
        <TagList>
          {this.props.tags.map((label) => (
            <TagListItem key={label}>
              <Link to={`/tag/${slugify(label)}`}>{label}</Link>&nbsp;/&nbsp;
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

const mapStateToProps = createStructuredSelector({
  tags: makeSelectAllTags()
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Tags);
export default connect(mapStateToProps)(Tags);
