import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';

import { RouterLink } from 'utils/markdown';

import MethodologiesFlag from 'assets/images/flag/relatedtools-methodologies.svg';
import PrinciplesFlag from 'assets/images/flag/relatedtools-principles.svg';
import StoriesFlag from 'assets/images/flag/relatedtools-stories.svg';
import TacticsFlag from 'assets/images/flag/relatedtools-tactics.svg';
import TheoriesFlag from 'assets/images/flag/relatedtools-theories.svg';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { Header,
          SidebarContent,
          RelatedHeader} from 'components/ToolPage/Sidebar';

import RelatedToolsList from './RelatedToolsList';

import staticText from '../staticText';

class RelatedTools extends React.PureComponent {
  constructor(props) {
    super();
  }

  renderRelated(FlagImage, typeKey) {
    console.log(this.props[typeKey]);
    if (!this.props[typeKey] || this.props[typeKey].length == 0) return null;
    return (
      <ContentBlock>
        <RelatedHeader>
          <Isvg src={FlagImage} />
        </RelatedHeader>
        <RelatedToolsList {...this.props} relatedTools={this.props[typeKey]} dict={this.props.toolsList}/>
      </ContentBlock>
    );
  }

  render() {

    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.relatedTools} />
          </Header>
          {this.renderRelated(TacticsFlag, "tactics")}
          {this.renderRelated(PrinciplesFlag, "principles")}
          {this.renderRelated(TheoriesFlag, "theories")}
          {this.renderRelated(MethodologiesFlag, "methodologies")}
          {this.renderRelated(StoriesFlag, "stories")}
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }
}

RelatedTools.propTypes = {
};

export default RelatedTools;
