/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import SmallHeaderBlock from 'components/SmallHeaderBlock';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { FormattedMessage, injectIntl } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import { themeThreeColumns } from 'components/CommonComponents';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';
import messages from './messages';

const List = styled.ul`
text-align: ${p=>p.lang==='ar'?'right':'left'};
`;

const ListItem = styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 34px;
`
;

const FAQHeader = styled(SmallHeaderBlock)`
  letter-spacing: 0px;
  margin-bottom: 5px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 42px;
    border-top: 2px solid #000;
    margin-top: -12px;
  }
`;

const FAQContent = styled(ContentBlock)`
  padding-${p=>p.theme.isArabic?'right':'left'}: 100px;
`;

const Image = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.h3``;
const Team = styled.h5`
  text-transform: uppercase;
`;
const Content = styled.div``;

export class FAQ extends React.Component {
  renderHeader() {
    return(
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          <FormattedMessage {...messages.faqHeader} />
        </h2>
      </VisibilitySensor>
    )
  }
  render() {
    const {locale}=this.props.intl;
    return (
      <LanguageThemeProvider>
        <AboutSection id='faq' lang={locale}>
          { this.props.hideHeader ? null : this.renderHeader()}
          <List lang={locale}>
            { this.props.questions === undefined ? null : this.props.questions.map((item, ind) => {
                return (
                  <ListItem key={ind}  lang={locale}>
                    <FAQHeader>{item.get('question')}</FAQHeader>
                    <FAQContent>
                      <Markdown source={item.get('answer')} />
                    </FAQContent>
                  </ListItem>
                )
              })
            }
          </List>
        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(FAQ);
