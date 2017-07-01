/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
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
  font-family: ${p=>p.ar?'Kaff Bold':'Avenir Black'};
  font-size: ${p=>p.ar?'16px':'14px'};
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
      <CallToAction ar={this.props.intl.locale==='ar'}>
        <img src={RemoveToolIcon}/>{ this.props.removeText || ""}
      </CallToAction>
    )
  }

  buildAdd() {
    return (
      <CallToAction ar={this.props.intl.locale==='ar'}>
        <img src={AddToolIcon}/>{ this.props.addText || "" }
      </CallToAction>
    );
  }

  render() {
    const {locale} = this.props.intl;
    // {React.Children.toArray(this.props.children)}
    if (this.props.slug === null) {
      return (<ToolsButton ar={locale==='ar'} color={this.props.color || "white"} onClick={null}><Isvg src={AddToolIcon}/></ToolsButton>);
    }

    if (this.props.children !== undefined) {

      return (
        <ToolsButton ar={locale==='ar'} onClick={this.onButtonClick.bind(this)}>
          {React.Children.toArray(this.props.children)}
        </ToolsButton>
      );
    } else {
      if (this.props.showFull) {

        return (<ToolsButton ar={locale==='ar'} onClick={this.onButtonClick.bind(this)}>
          {this.props.toolIsSelected ? "Remove" : "Add"}
        </ToolsButton>);
      } else {

        return (
          <ToolsButton ar={locale==='ar'} color={this.props.color || "white"} onClick={this.onButtonClick.bind(this)}>
            {this.props.toolIsSelected && this.props.toolIsSelected !== undefined ? this.buildRemove() : this.buildAdd()}
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(AdderRemover));
