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

const CallToAction = styled.span`
  text-transform: uppercase;
  font-family: Avenir Black;
  line-height: 22px;
`;

export class AdderRemover extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onButtonClick(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();

    if (this.props.toolIsSelected) {
      this.props.removeTool(this.props.slug)
    } else {
      this.props.addTool(this.props.slug, this.props.title, this.props.type, this.props.snapshot);
    }
  }

  buildRemove() {
    return (
      <CallToAction>
        <Isvg src={RemoveToolIcon}/>{ this.props.removeText || ""}
      </CallToAction>
    )
  }

  buildAdd() {
    return (
      <CallToAction>
        <Isvg src={AddToolIcon}/>{ this.props.addText || "" }
      </CallToAction>
    );
  }

  render() {
    // {React.Children.toArray(this.props.children)}
    if (this.props.slug === null) {
      return (<ToolsButton color={this.props.color || "white"} onClick={null}><Isvg src={AddToolIcon}/></ToolsButton>);
    }

    if (this.props.children !== undefined) {
      return (
        <ToolsButton onClick={this.onButtonClick.bind(this)}>
          {React.Children.toArray(this.props.children)}
        </ToolsButton>
      );
    } else {
      if (this.props.showFull) {
        return (<ToolsButton onClick={this.onButtonClick.bind(this)}>
          {this.props.toolIsSelected ? "Remove" : "Add"}
        </ToolsButton>);
      } else {
        return (
          <ToolsButton color={this.props.color || "white"} onClick={this.onButtonClick.bind(this)}>
            {this.props.toolIsSelected ? this.buildRemove() : this.buildAdd()}
          </ToolsButton>
        );
      }
    }

  }
}

AdderRemover.propTypes = {
  slug: PropTypes.string
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
