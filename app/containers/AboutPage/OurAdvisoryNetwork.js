/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-remarkable';
import VisibilitySensor from 'react-visibility-sensor';
import { injectIntl } from 'react-intl';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Introduction from 'components/AboutPage/Introduction';
import { themeThreeColumns } from 'components/CommonComponents';
import AdvisoryNetworkListItem from 'components/AboutPage/AdvisoryNetwork/AdvisoryNetworkListItem';
import AdvisoryNetworkImage from 'components/AboutPage/AdvisoryNetwork/AdvisoryNetworkImage';
import AdvisoryNetworkSection from 'components/AboutPage/AdvisoryNetwork/AdvisoryNetworkSection';
import AdvisoryNetworkIntro from 'components/AboutPage/AdvisoryNetwork/AdvisoryNetworkIntro';

import messages from './messages';

export class OurAdvisoryNetwork extends React.Component {
  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          {this.props.header}
        </h2>
      </VisibilitySensor>
    );
  }
  render() {
    const {locale} = this.props.intl;
    return (
      <LanguageThemeProvider>
        <AdvisoryNetworkSection lang={locale} id='advisory-network'>
          { this.props.hideHeader ? null : this.renderHeader() }
          <Introduction>
            <AdvisoryNetworkIntro lang={locale}>
              <ContentBlock style={{textAlign: 'center'}}>
                <Markdown source={this.props.introText}/>
              </ContentBlock>
            </AdvisoryNetworkIntro>
          </Introduction>
          <ThemeProvider theme={themeThreeColumns}>
            <ul>
              { this.props.advisoryNetwork.map((item, ind) => (
                <AdvisoryNetworkListItem key={ind}>
                  <AdvisoryNetworkImage source={item['image']} />
                  <h3>{item['person']}</h3>
                  <h5>ADVISORY NETWORK</h5>
                  <ContentBlock>
                    <Markdown source={item['team-bio']} />
                  </ContentBlock>
                </AdvisoryNetworkListItem>
              ))}
            </ul>
          </ThemeProvider>
        </AdvisoryNetworkSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(OurAdvisoryNetwork);
