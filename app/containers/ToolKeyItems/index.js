/**
*
* ToolKeyItems
*
*/

import React, {PropTypes} from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { injectIntl } from 'react-intl';
import { RouterLink } from 'utils/markdown';
import { Link } from 'react-router';
import Markdown from 'react-markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';


import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import KeyItemList from 'components/ToolKeyItems/KeyItemList';
import KeyItemListItem from 'components/ToolKeyItems/KeyItemListItem';
import Header from 'components/ToolKeyItems/Header';
import TypeSubheader from 'components/ToolKeyItems/TypeSubheader';

import staticText from './staticText';

const ToolLink = styled(Link)`
  text-decoration: none;
  color: black;
`;


class ToolKeyItems extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();
  }

  generateKeyItems(list, type) {
    if (!list || list === undefined || list.length == 0) return null;
    const { locale } = this.props.intl;
    return (
      <KeyItemList>
        { list.map((item,ind)=> {
            try {
              const [header, content, slug] = item;
              return (<KeyItemListItem key={ind} >
                        {ind>0?null:<TypeSubheader type={type}>
                          <TranslatableStaticText {...staticText[type]} />
                        </TypeSubheader>}
                        <Header>
                          <ToolLink to={`/tool/${slug}`}>{header}</ToolLink>
                        </Header>
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
    const keyTactics=this.props['key-modules'] ? this.props['key-modules']['key-tactics'] : [];
    const keyPrinciples=this.props['key-modules'] ? this.props['key-modules']['key-principles']  : [];
    const keyTheories=this.props['key-modules'] ? this.props['key-modules']['key-theories'] : [];
    const keyMethodologies=this.props['key-modules'] ? this.props['key-modules']['key-methodologies'] : [];

    const showTactics = this.props.showIfUntranslated('key-tactics');
    const showPrinciples = this.props.showIfUntranslated('key-principles');
    const showTheories = this.props.showIfUntranslated('key-theories');
    const showMethodologies = this.props.showIfUntranslated('key-methodologies');

    
    return (
      <LanguageThemeProvider>
        <section>
          <div>
            {showTactics ? this.generateKeyItems(keyTactics, keyTactics&&keyTactics.length > 1 ? "tactics" : "tactic") : null}
            {showPrinciples ? this.generateKeyItems(keyPrinciples, keyPrinciples&&keyPrinciples.length > 1 ? "principles" : "principle") : null}
            {showTheories ? this.generateKeyItems(keyTheories, keyTheories&&keyTheories.length > 1 ? "theories" : "theory") : null}
            {showMethodologies ? this.generateKeyItems(keyMethodologies, keyMethodologies&&keyMethodologies.length > 1 ? "methodologies" : "methodology") : null}
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
