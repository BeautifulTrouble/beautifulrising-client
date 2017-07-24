/**
*
* ToolKeyItems
*
*/

import React, {PropTypes} from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { injectIntl } from 'react-intl';
import { RouterLink } from 'utils/markdown';
import Markdown from 'react-markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';


import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import KeyItemList from 'components/ToolKeyItems/KeyItemList';
import KeyItemListItem from 'components/ToolKeyItems/KeyItemListItem';
import Header from 'components/ToolKeyItems/Header';
import TypeSubheader from 'components/ToolKeyItems/TypeSubheader';

import staticText from './staticText';


class ToolKeyItems extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  generateKeyItems(list, type) {
    if (!list || list === undefined || list.length == 0) return null;
    const { locale } = this.props.intl;
    return (
      <KeyItemList>
        { list.map((item,ind)=> {
            try {
              const [header, content] = item;
              return (<KeyItemListItem key={ind} >
                        {ind>0?null:<TypeSubheader type={type}>
                          <TranslatableStaticText {...staticText[type]} />
                        </TypeSubheader>}
                        <Header>{header}</Header>
                        <ContentBlock>
                          <Markdown
                              source={content}
                              renderers={{Link: RouterLink}}
                          />
                        </ContentBlock>
                      </KeyItemListItem>)
            } catch (e) {
              console.error(e);
              return null;
            }

        }) }
      </KeyItemList>
    )

  }


  render() {
    return (
      <LanguageThemeProvider>
        <section>
          <div>
            {this.props.showTactics ? this.generateKeyItems(this.props.keyTactics, this.props.keyTactics&&this.props.keyTactics.length > 1 ? "tactics" : "tactic") : null}
            {this.props.showPrinciples ? this.generateKeyItems(this.props.keyPrinciples, this.props.keyPrinciples&&this.props.keyPrinciples.length > 1 ? "principles" : "principle") : null}
            {this.props.showTheories ? this.generateKeyItems(this.props.keyTheories, this.props.keyTheories&&this.props.keyTheories.length > 1 ? "theories" : "theory") : null}
            {this.props.showMethodologies ? this.generateKeyItems(this.props.keyMethodologies, this.props.keyMethodologies&&this.props.keyMethodologies.length > 1 ? "methodologies" : "methodology") : null}
          </div>
        </section>
      </LanguageThemeProvider>
    );
  }
}

ToolKeyItems.propTypes = {
  keyMethodologies: PropTypes.array,
  keyTactics: PropTypes.array,
  keyPrinciples: PropTypes.array,
  keyTheories: PropTypes.array,
};

export default injectIntl(ToolKeyItems);
