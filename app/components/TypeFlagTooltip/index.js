/**
*
* TypeFlagTooltip
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from 'containers/HomePage/messages';

const Container = styled.div`
  position: absolute;
  ${p=>p.lang==='ar'?'right':'left'}: 0;
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
  background-image: url(${props=>require('assets/images/type/' + props.type + '-icon.svg')});
  background-size: cover;
  width: 30px;
  height: 30px;
  background-size: contain;
`;

const TypeName = styled.div`
  font-family: 'Avenir', 'Kaff Bold';
  font-size: 10px;
  text-transform: capitalize;
  margin-top: -10px;
`;



const Viewport = styled.div``;
const List = styled.ul`margin: 0; padding: 0`;
const Item = styled.li`
  display: inline-block;
  text-align: center;
  position: relative;
  white-space: nowrap;
  padding-${p=>p.lang==='ar'?'left':'right'}: 10px;
  &::after {
    position: absolute;
    top: 10px;
    ${p=>p.lang==='ar'?'left':'right'}: -3px;
    content: '+';
    display: inline-block;
    padding: 0px 3px;
  }

  &:first-child .typeName {
    text-decoration: underline;
  }

  &:last-child {
    padding-${p=>p.lang==='ar'?'left':'right'}: 0px;
    &::after { content: ''; }
  }
`;

function TypeFlagTooltip(props) {
  const lang = props.intl.locale;
  const types = props.type !== 'story' ?
                    [ {name: props.type, show: true}, ...props.truths.filter(item=>item.name != props.type)] :
                    props.truths;
  return (
    <Container show={props.show} lang={lang}>
      <Viewport>
        <List>
          {types.map((item, ind) =>  !item.show ? null : (
            <Item key={ind} lang={lang}>
              <TypeTile type={item.name} />
              <TypeName class={'typeName'}>
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

export default injectIntl(TypeFlagTooltip);
