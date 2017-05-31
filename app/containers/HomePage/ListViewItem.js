/**
*
* ListViewItem
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Link from 'components/Link';
import AdderRemover from 'containers/Tools/AdderRemover';
import messages from './messages';
import {ToolType, ToolTitle, ListContainer, ListViewport, ListSpiel} from 'components/ToolsComponents';
import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';


class ListViewItem extends React.Component {

  render() {
    return (
      <ListContainer>
        <ListViewport>
          <hr width="60px"/>
          <ToolType type={this.props.type}>{this.props.type}</ToolType>
          <ToolTitle><Link to={`/tool/${this.props.slug}`}>{this.props.title}</Link></ToolTitle>
          <ListSpiel type={this.props.type}>{this.props.snapshot}</ListSpiel>
        </ListViewport>
      </ListContainer>
    );
  }
}

ListViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  snapshot: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ListViewItem;