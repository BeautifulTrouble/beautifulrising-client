import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import { RouterLink } from 'utils/markdown';
import { PROP_SHORT_WRITE_UP } from '../constants';
import {ShortContentContainer} from 'components/ToolPage/Main'

export default function(props) {
  if (!props[PROP_SHORT_WRITE_UP] ) return null;
  return(
    <LanguageThemeProvider>
      <ContentBlock>
        <ShortContentContainer>
          <Markdown
            source={props[PROP_SHORT_WRITE_UP].replace(/\(([^()]*?)\.(jpg|png)\)/g,"(https://www.beautifulrising.org/$1.$2)") }
            renderers={{Link: RouterLink}}
          />
        </ShortContentContainer>
      </ContentBlock>
    </LanguageThemeProvider>
  );
}
