/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Isvg from 'react-inlinesvg';

import AddToolIcon from 'assets/images/icons/add-tool.svg';
import RemoveToolIcon from 'assets/images/icons/remove-tool.svg';

import makeSelectTools, { toolIsSelected } from './selectors';
import messages from './messages';
import styled from 'styled-components';

import { Link } from 'react-router';

import { ToolsButton, ToolsListMenu, ToolsListMenuItem,
          ToolsList, ToolsListItem } from 'components/ToolsComponents';

import { removeTool, addTool } from './actions';

export class AdderRemover extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onButtonClick() {
    if (this.props.toolIsSelected) {
      this.props.removeTool(this.props.slug)
    } else {
      this.props.addTool(this.props.slug, this.props.title, this.props.type, this.props.snapshot);
    }
  }

  render() {

    if (this.props.showFull) {
      return (<ToolsButton onClick={this.onButtonClick.bind(this)}>
        {this.props.toolIsSelected ? "Remove" : "Add"}
      </ToolsButton>);
    } else {
      return (
        <ToolsButton onClick={this.onButtonClick.bind(this)}>
          {this.props.toolIsSelected ? <img src={RemoveToolIcon}/> : <img src={AddToolIcon}/>}
        </ToolsButton>
      );
    }
  }
}

AdderRemover.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  snapshot: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    toolIsSelected: toolIsSelected(state, props)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addTool : (slug, title, type, snapshot) => {
      dispatch(addTool(slug, title, type, snapshot));
    },
    removeTool: (slug) => {
      dispatch(removeTool(slug));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdderRemover);
