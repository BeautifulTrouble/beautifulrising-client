import React, { PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';

import AdderRemover from 'containers/Tools/AdderRemover';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ShareButton from 'containers/ShareButton';
import ContentBlock from 'components/ContentBlock';
import ContinentIcon from 'components/ContinentIcon';

import ShareIcon from 'assets/images/icons/share-small.svg';

import {CTA, ShareContainer,
        InteractiveViewport, MobileInteractiveContainer} from 'components/ToolPage/Header';

class MobileInteractiveArea extends React.PureComponent {
  constructor() {
    super();
  }
  render() {
    const { locale } = this.props.intl;
    return (
      <MobileInteractiveContainer lang={locale}>
        <LanguageThemeProvider>
          <InteractiveViewport>
            <LanguageThemeProvider>
              <ContinentIcon {...this.props}/>
              <AdderRemover
                {...this.props}
              />
              <ShareContainer>
                <ShareButton {...this.props} orientation={'horizontal'}>
                  <ContentBlock>
                    <Isvg src={ShareIcon} className={'share-button'} />
                  </ContentBlock>
                </ShareButton>
              </ShareContainer>
            </LanguageThemeProvider>
          </InteractiveViewport>
        </LanguageThemeProvider>
      </MobileInteractiveContainer>
    )
  }
}

export default injectIntl(MobileInteractiveArea);
