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
import Snapshot from 'containers/ToolPage/Snapshot';
import staticText from './staticText';

const SnapshotTitle = styled(ToolTitle)`
  margin-bottom: 0;
  padding-bottom: 0;
  text-decoration: none !important;
`;

class ListViewItem extends React.Component {

  renderLink() {

    if (this.props['module-type-effective'] === 'snapshot') {
      return (
        <Snapshot {...this.props} noUnderline={true}>
          <SnapshotTitle>{this.props.title}</SnapshotTitle>
        </Snapshot>
      );
    }

    return (
      <Link to={`/tool/${this.props.slug}`}>{this.props.title}</Link>
    )
  }
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
            <ToolTitle>
              {this.renderLink()}
            </ToolTitle>
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
