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
import messages from './messages';

const List = styled.ul`text-align: left;`;
const SubList = styled.ul``;

const ListItem = styled.li`
  list-style: none;
  text-align: left;
`
const SubListItem = styled.li`list-style: none;`

export default class OurValues extends React.Component {
  render() {
    if (!this.props.ourValues) return null;

    console.log(this.props.ourValues);
    return (
      <AboutSection id='values' name='values'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.ourValuesHeader} />
          </h2>
        </VisibilitySensor>
          <List>
            { this.props.ourValues.map((item, ind) =>
                  {
                    switch(item.get('type')) {
                      case 'introduction': return null;
                      case 'values': return (
                        <SubList key={ind}>
                          { item.get('value').map((subitem, subindex) => (
                              <SubListItem key={subindex}>
                                <h3>{subitem.get('title')}</h3>
                                <p>{subitem.get('description')}</p>
                              </SubListItem>
                          )) }
                        </SubList>
                      );
                      case 'disclaimer': return (
                        <h3 key={ind}>{item.get('value')}</h3>
                      );
                      case 'disclaimer-text': return (
                        <p key={ind}>{item.get('value')}</p>
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
