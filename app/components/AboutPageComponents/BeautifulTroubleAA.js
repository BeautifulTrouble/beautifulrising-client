/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';
import messages from './messages';

import ActionAidLogo from 'assets/images/about/aa-logo.png';
import BeautifulTroubleLogo from 'assets/images/about/bt-logo.png';

const Container = styled.div``;
const Content = styled.div``;
const TableMenu = styled.table`border: 0;`;
const Row = styled.tr``;
const Column = styled.td`font-size: 16px; padding: 10px`;

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
    return (
      <AboutSection id='beautiful-trouble-and-action-aid'>
        { this.props.hideHeader ? null : this.renderHeader() }
        <Container>
          <Content>
            <TableMenu>
              <Row>
                <Column colSpan={"2"} style={{ padding: '0 25%'}}>
                  <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'introduction'])} />
                </Column>
              </Row>
              <Row>
                <Column>
                  <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'aa'])} />
                  <Image src={ActionAidLogo} />
                </Column>
                <Column>
                  <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'bt'])} />
                  <Image src={BeautifulTroubleLogo} />
                </Column>
              </Row>
            </TableMenu>
          </Content>
        </Container>
      </AboutSection>
    );

  }
}

export default BeautifulTroubleAA;
