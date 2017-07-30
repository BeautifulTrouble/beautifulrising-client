import React from 'react';
import Markdown from 'react-markdown';
import {injectIntl} from 'react-intl';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import Epigraph from './Epigraph';
import { RouterLink } from 'utils/markdown';
import { ContentContainer, PullQuote } from 'components/ToolPage/Main';

class FullContent extends React.PureComponent {

  renderWithPullQuote(content) {
    const {locale} = this.props.intl;
    const count = 1 + ((Math.random() * 100) % 2);
    const split = content.split('\n').filter(item => item !== "");
    let contents = split.map((item, ind) => { return (<Markdown key={ind} source={item} renderers={{Link: RouterLink}} />) });
    let pullQuote = <Markdown
                      source={this.props['pull-quote']}
                      renderers={{Link: RouterLink}} />
    contents.splice(count, 0, (<PullQuote ar={locale==='ar'} key={Math.random()}>"{pullQuote}"</PullQuote>));

    return (
      <div>
        { contents }
      </div>
    );
  }
  generateContent(content) {
    if (this.props['pull-quote'] !== '') {
      return this.renderWithPullQuote(content);
    } else {
      <Markdown
          source={content}
          renderers={{Link: RouterLink}}
      />
    }
  }
  render() {
    if (!this.props['full-write-up']) return null;

    const imageReplaced = this.props['full-write-up'].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)");

    const content = this.generateContent(imageReplaced);

    return(
      <ContentContainer>
        <LanguageThemeProvider>
          <Epigraph {...this.props}/>
          <ContentBlock>
            { content }
          </ContentBlock>
        </LanguageThemeProvider>
      </ContentContainer>
    );
  }

}

export default injectIntl(FullContent);
