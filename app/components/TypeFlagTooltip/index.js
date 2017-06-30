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
  ${p=>p.lang==='ar'?'right':'left'}: 50%;
  transform: ${p=>p.lang==='ar'?'translateX(50%)':'translateX(-50%)'};
  border: 2px solid;
  font-weight: bold;
  bottom: 110px;
  padding: 12px 8px 3px;
  display: ${props=>props.show?'block':'none'};
  // display: block;
  background-color: white;
  text-align: center;

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
  text-transform: ${p=>p.lang==='ar'?'capitalize':'uppercase'};
  margin-top: -10px;
  text-decoration: ${p=>p.mainType?'underline':'none'};
`;



const Viewport = styled.div``;
const List = styled.ul`margin: 0; padding: 0;`;
const Item = styled.li`
  display: table-cell;
  text-align: center;
  position: relative;
  white-space: nowrap;
  padding-${p=>p.lang==='ar'?'left':'right'}: 15px;
  &::after {
    position: absolute;
    top: 2px;
    ${p=>p.lang==='ar'?'left':'right'}: -1px;
    content: '+';
    display: inline-block;
    padding: 0px 3px;
  }

  &:first-child .typeName {
    text-decoration: underline;
  }

  &:last-child {
    padding-${p=>p.lang==='ar'?'left':'right'}: 0px;
    padding-${p=>p.lang==='ar'?'right':'left'}: 5px;
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
              <TypeName mainType={item.name===props.type} class={'typeName'}>
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
