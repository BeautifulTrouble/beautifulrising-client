import React, { PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';

import AdderRemover from 'containers/Tools/AdderRemover';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ShareButton from 'containers/ShareButton';
import ContentBlock from 'components/ContentBlock';
import ShareIcon from 'assets/images/icons/share-small.svg';

import {CTA, ShareContainer,
        InteractiveViewport, InteractiveContainer} from 'components/ToolPage/Header';

class InteractiveArea extends React.PureComponent {
  constructor() {
    super();
  }
  render() {
    const { locale } = this.props.intl;
    return (
      <InteractiveContainer lang={locale}>
        <InteractiveViewport>
          <LanguageThemeProvider>
            <AdderRemover
              {...this.props}
            />
            <ShareContainer>
              <ShareButton {...this.props} orientation={'vertical'}>
                <ContentBlock>
                  <Isvg src={ShareIcon} className={'share-button'} />
                </ContentBlock>
              </ShareButton>
            </ShareContainer>
          </LanguageThemeProvider>
        </InteractiveViewport>
      </InteractiveContainer>
    )
  }
}

export default injectIntl(InteractiveArea);
