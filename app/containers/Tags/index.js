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


export class Tags extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <MenuBlock>
        <MenuTitle>
          <FormattedMessage {...messages.header} />
        </MenuTitle>
        <MenuList>
          {this.props.tags.map((label) => (
            <MenuListItem key={label}>
              <Link to={`/tag/${slugify(label)}`}>{label}</Link>&nbsp;/&nbsp;
            </MenuListItem>
          ))}
        </MenuList>
      </MenuBlock>
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
