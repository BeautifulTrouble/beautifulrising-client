/**
*
* TypeFlagTooltip
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Container = styled.div`
  position: absolute;
  right: 70px;
  border: 2px solid;
  font-weight: bold;
  bottom: 180px;
  padding: 3px;
  display: ${props=>props.show?'block':'none'};
  max-width: 500px;
`;

const Viewport = styled.div``;
const List = styled.ul`margin: 0; padding: 0`;
const Item = styled.li`display: inline-block;


  &::after {
    content: '+';
    display: inline-block;
    padding: 0px 3px;
  }

  &:last-child {
    &::after { content: ''; }
  }
`;

function TypeFlagTooltip(props) {
  return (
    <Container show={props.show}>
      <Viewport>
        <List>
          {props.truths.map((item, ind) => !item.show ? null : (<Item key={ind}>{item.name}</Item>))}
        </List>
      </Viewport>
    </Container>
  );
}

TypeFlagTooltip.propTypes = {

};

export default TypeFlagTooltip;
