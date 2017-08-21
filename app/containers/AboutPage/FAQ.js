/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';
import { injectIntl } from 'react-intl';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import AboutSection from 'components/AboutPage/AboutSection';
import FAQList from 'components/AboutPage/FAQ/FAQList';
import FAQListItem from 'components/AboutPage/FAQ/FAQListItem';
import FAQHeader from 'components/AboutPage/FAQ/FAQHeader';
import FAQContent from 'components/AboutPage/FAQ/FAQContent';


export class FAQ extends React.Component {
  renderHeader() {
    return(
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          {this.props.allData.getIn(['about', 'misc', 'faq'])}
        </h2>
      </VisibilitySensor>
    )
  }
  render() {
    if (!this.props.questions ) return null;
    const {locale}=this.props.intl;
    return (
      <LanguageThemeProvider>
        <AboutSection id='faq' lang={locale} position={this.props.questions.toString().length}>
          { this.props.hideHeader ? null : this.renderHeader()}
          <FAQList lang={locale}>
            { this.props.questions === undefined ? null : this.props.questions.map((item, ind) => {
                return (
                  <FAQListItem key={ind}  lang={locale}>
                    <FAQHeader>{item.get('question')}</FAQHeader>
                    <FAQContent>
                      <Markdown source={item.get('answer')} />
                    </FAQContent>
                  </FAQListItem>
                )
              })
            }
          </FAQList>
        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(FAQ);
