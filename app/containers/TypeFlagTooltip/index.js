/**
*
* TypeFlagTooltip
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from 'containers/HomePage/messages';

import Container from 'components/TypeFlagTooltip/Container';
import TypeTile from 'components/TypeFlagTooltip/TypeTile';
import TypeName from 'components/TypeFlagTooltip/TypeName';
import List from 'components/TypeFlagTooltip/List';
import Item from 'components/TypeFlagTooltip/Item';

function TypeFlagTooltip(props) {
  const lang = props.intl.locale;
  const types = props.type !== 'story' ?
                    [ {name: props.type, show: true}, ...props.truths.filter(item=>item.name != props.type)] :
                    props.truths;
  return (
    <Container show={props.show} lang={lang}>
      <div>
        <List>
          {types.map((item, ind) =>  !item.show ? null : (
            <Item key={ind} lang={lang}>
              <TypeTile type={item.name} />
              <TypeName mainType={item.name===props.type} class={'typeName'}>
                <FormattedMessage {...messages[item.name]} />
              </TypeName>
            </Item>))}
        </List>
      </div>
    </Container>
  );
}

TypeFlagTooltip.propTypes = {

};

export default injectIntl(TypeFlagTooltip);
