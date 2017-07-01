/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import { FormattedMessage, injectIntl } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import VisibilitySensor from 'react-visibility-sensor';
import messages from './messages';

const List = styled.ul`
  text-align: left;
  padding-left: 0;
`;
const SubList = styled.ul``;

const ListItem = styled.li`
  list-style: none;
  text-align: left;
`
const Count = styled.h4`
  display: inline-block;
  border: 2px solid;
  border-width: 0 0 2px;
  padding: 10px 20px 2px 5px;
  margin: 0;
  font-size: 30px;
  font-family: 'KnockOut', 'Greta';
  margin-bottom: 4px;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
`;

const SubListItem = styled.li`
  list-style: none;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  h3 {
    margin: 0;
    font-size: 19px;
    font-family: Avenir Black, Kaff Bold;
    letter-spacing: 0;
    &::before {
      content: ' ';
      width: 42px;
      height: 1px;
      border-bottom: 2px solid;
    }
  }
  & > p {
    padding-${p=>p.lang==='ar'?'right':'left'}: 100px;
    margin: 10px;
  }
`

export class OurValues extends React.Component {
  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          <FormattedMessage {...messages.ourValuesHeader} />
        </h2>
      </VisibilitySensor>
    )
  }
  render() {
    if (!this.props.ourValues) return null;
    const lang = this.props.intl.locale
    return (
      <AboutSection id='values' name='values' lang={lang}>
        { this.props.hideHeader ? null : this.renderHeader() }
          <List>
            { this.props.ourValues.map((item, ind) =>
                  {
                    switch(item.get('type')) {
                      case 'introduction': return null;
                      case 'values': return (
                        <SubList key={ind}>
                          { item.get('value').map((subitem, subindex) => (
                              <SubListItem key={subindex} lang={lang}>
                                <Count>{subindex + 1}</Count>
                                <h3>{subitem.get('title')}</h3>
                                <ContentBlock>
                                  <Markdown source={subitem.get('description')} />
                                </ContentBlock>
                              </SubListItem>
                          )) }
                        </SubList>
                      );
                      case 'disclaimer': return (
                        <SubList key={ind}>
                          <SubListItem lang={lang}>
                            <h3 key={ind}>{item.get('value')}</h3>
                          </SubListItem>
                        </SubList>
                      );
                      case 'disclaimer-text': return (
                        <SubList key={ind}>
                          <SubListItem lang={lang}>
                            <p key={ind} style={{color: '#828486'}}>
                              <Markdown source={item.get('value')} />
                            </p>
                          </SubListItem>
                        </SubList>
                      );
                   }
                 }
              )
            }
          </List>

      </AboutSection>
    );
  }
}

export default injectIntl(OurValues);
