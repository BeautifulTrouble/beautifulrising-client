/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router';

import { gaClick } from 'utils/analytics';

import AddToolIcon from 'assets/images/icons/add-tool.svg';
import RemoveToolIcon from 'assets/images/icons/remove-tool.svg';

import makeSelectTools, { toolIsSelected } from './selectors';
import messages from './messages';
import styled from 'styled-components';

import { ToolsButton, ToolsListMenu, ToolsListMenuItem,
          ToolsList, ToolsListItem } from 'components/ToolsComponents';

import { getToolTypeColor } from 'components/CommonComponents';
import { removeTool, addTool } from './actions';

const CallToAction = styled.span`
  text-transform: uppercase;
  font-family: Avenir, Kaff;
  font-weight: 800;
  font-size: ${p=>p.ar?'16px':'14px'};
  line-height: 22px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
`;

const CallToRemoveAction = styled(CallToAction) `
  svg circle {
    ${p=>p.type ? `stroke: ${getToolTypeColor(p.type)};` : ''}
    fill: transparent;
  }

  svg path {
    fill:  ${p=>p.type ? `${getToolTypeColor(p.type)}` : 'transparent'};
  }
  margin-left: 0;
  margin-top: 0;
`

const CallToActionButton = styled(ToolsButton)`
  margin-top: -10px;
  margin-${p=>p.ar?'right':'left'}: -10px;
`

export class AdderRemover extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onButtonClick(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();

    if (this.props.toolIsSelected) {
      this.props.removeTool(this.props.slug)
    } else {
      this.props.addTool(this.props.slug, this.props.title, this.props.type, this.props.snapshot);
      gaClick('save-tool');
    }
  }

  buildRemove() {
    return (
      <CallToRemoveAction ar={this.props.intl.locale==='ar'} type={this.props.type}>
        <Isvg src={RemoveToolIcon}/>{ this.props.removeText || ""}
      </CallToRemoveAction>
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
          <CallToActionButton ar={locale==='ar'} color={this.props.color || "white"} onClick={this.onButtonClick.bind(this)}>
            {this.props.toolIsSelected && this.props.toolIsSelected !== undefined ? this.buildRemove() : this.buildAdd()}
          </CallToActionButton>
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
