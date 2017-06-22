/**
*
* TypeFlagTooltip
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';

const Container = styled.div`
  position: absolute;
  left: 0;
  border: 2px solid;
  font-weight: bold;
  bottom: 110px;
  padding: 3px;
  display: ${props=>props.show?'block':'none'};
  background-color: white;
  // max-width: 500px;
`;

const TypeTile = styled.span`
  display: inline-block;
  background-image: url(${props=>require('assets/images/type-tile/' + props.type + '.png')});
  background-size: cover;
  width: 40px;
  height: 40px;
`;

const TypeName = styled.div`
  font-family: 'Avenir', 'Kaff Bold';
  font-size: 10px;
  text-transform: capitalize;
  text-decoration: underline;
  margin-top: -10px;
`;



const Viewport = styled.div``;
const List = styled.ul`margin: 0; padding: 0`;
const Item = styled.li`display: inline-block;
  text-align: center;
  position: relative;
  white-space: nowrap;
  padding-right: 10px;
  &::after {
    position: absolute;
    top: 10px;
    right: -3px;
    content: '+';
    display: inline-block;
    padding: 0px 3px;
  }

  &:last-child {
    padding-right: 0px;
    &::after { content: ''; }
  }
`;

function TypeFlagTooltip(props) {
  return (
    <Container show={props.show}>
      <Viewport>
        <List>
          {props.truths.map((item, ind) =>  !item.show ? null : (
            <Item key={ind}>
              <TypeTile type={item.name} />
              <TypeName>
                <FormattedMessage {...messages[item.name]} />
              </TypeName>
            </Item>))}
        </List>
      </Viewport>
    </Container>
  );
}

TypeFlagTooltip.propTypes = {

};

export default TypeFlagTooltip;
