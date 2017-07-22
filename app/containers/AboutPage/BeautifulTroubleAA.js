/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import AboutSection from 'components/AboutPage/AboutSection';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';
import messages from './messages';

import ActionAidLogo from 'assets/images/about/aa-logo.png';
import BeautifulTroubleLogo from 'assets/images/about/bt-logo.png';

const Container = styled.div``;
const TableMenu = styled.table`border: 0;`;
const Row = styled.tr``;
const Column = styled.td`
  padding: 10px;
  width: 50%;
  vertical-align: top;
`;

const Image = styled.img``;

export class BeautifulTroubleAA extends React.Component {
  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          <FormattedMessage {...messages.beautifulTroubleAAHeader} />
        </h2>
      </VisibilitySensor>
    )
  }

  render() {
    const {locale}=this.props.intl;
    return (
      <LanguageThemeProvider>
        <AboutSection id='beautiful-trouble-and-action-aid' lang={locale}>
          { this.props.hideHeader ? null : this.renderHeader() }
          <Container>
            <ContentBlock>
              <TableMenu>
                <Row>
                  <Column colSpan={"2"} style={{ padding: '0 25%', textAlign: 'center'}}>
                    <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'introduction'])} />
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'bt'])} />
                    <Image src={BeautifulTroubleLogo} />
                  </Column>
                  <Column>
                    <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'aa'])} />
                    <Image src={ActionAidLogo} />
                  </Column>
                </Row>
              </TableMenu>
            </ContentBlock>
          </Container>
        </AboutSection>
      </LanguageThemeProvider>
    );

  }
}

export default injectIntl(BeautifulTroubleAA);
