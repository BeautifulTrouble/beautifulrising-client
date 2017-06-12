/**
*
* ToolTypeSelectedPartial
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from '../ToolTypeArea/messages';

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
const Viewport = styled.div`
  vertical-align: bottom;
  text-align: left;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }

  * {
    vertical-align: bottom;
  }
`;
const Column = styled.div`
  text-align: center;
  width: ${props=>props.width}
  float: left;
`;
const ToolType = styled(Link)`
  margin-right: 0.5%;
  display: inline-block;
  text-align: left;
  vertical-align: bottom;
  font-size: ${(props)=>props.selected ? '24px':'18px'};
  text-decoration: ${(props)=>props.selected ? 'none':'underline'};
  text-transform: 'uppercase';
  margin-right: 20px;

  * {
    vertical-align: bottom;
  }
`;

function ToolTypeSelectedPartial(props) {
  return (
    <Container show={props.show}>
      <Viewport>
          <ToolType to={'/'}>All</ToolType>
          <ToolType to={'/type/story'} selected={props.label === 'story'}>
            <FormattedMessage {...messages.storyHead} />
          </ToolType>
          <ToolType to={'/type/tactic'} selected={props.label === 'tactic'}>
            <FormattedMessage {...messages.tacticHead} />
          </ToolType>
          <ToolType to={'/type/principle'} selected={props.label === 'principle'}>
            <FormattedMessage {...messages.principleHead} />
          </ToolType>
          <ToolType to={'/type/theory'} selected={props.label === 'theory'}>
            <FormattedMessage {...messages.theoryHead} />
          </ToolType>
          <ToolType to={'/type/methodology'} selected={props.label === 'methodology'}>
            <FormattedMessage {...messages.methodologyHead} />
          </ToolType>
      </Viewport>
    </Container>
  );
}

ToolTypeSelectedPartial.propTypes = {

};

export default ToolTypeSelectedPartial;
