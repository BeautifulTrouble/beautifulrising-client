/**
*
* ListViewItem
*
*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { injectIntl } from 'react-intl';
import Link from 'components/Link';
import AdderRemover from 'containers/Tools/AdderRemover';
import {ToolType, ToolTitle, ListContainer, ListSpiel} from 'components/ToolsComponents';
import { ListViewport } from 'components/HomePage/ListView';

import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';

class ListViewItem extends React.Component {

  render() {
    const { locale } = this.props.intl;

    return (
      <ListContainer lang={locale} index={this.props.index}>
        <ListViewport>
          <LanguageThemeProvider>
            <ToolType type={this.props.type}>
              <ToolType type={this.props.type}>
                <TranslatableStaticText { ...staticText[this.props.type] } />
              </ToolType>
            </ToolType>
            <ToolTitle><Link to={`/tool/${this.props.slug}`}>{this.props.title}</Link></ToolTitle>
            <ListSpiel type={this.props.type}><Markdown source={this.props.snapshot} /></ListSpiel>
          </LanguageThemeProvider>
        </ListViewport>
      </ListContainer>
    );
  }
}

ListViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  snapshot: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

export default injectIntl(ListViewItem);
