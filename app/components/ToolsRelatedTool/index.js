/**
*
* ToolsRelatedTool
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { injectIntl } from 'react-intl';
import { getToolTypeColor } from 'components/CommonComponents';

const Container = styled.div`
  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
`;

const Viewport = styled.div``;

const List = styled.ul`
padding: 0;
margin: 0;
margin-${p=>p.lang==='ar'?'right':'left'}:  18px;
`;

const ListItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 14px;
`;

const ToolLink = styled(Link)`
  color: black;
  text-decoration: underline;
`;

function ToolsRelatedTool(props) {
  return (
    <Container lang={props.intl.locale}>
      <Viewport>
        <List lang={props.intl.locale}>
          {props.relatedTools.map(item => (
            <ListItem key={item}>
              <ToolLink to={`/tool/${item}`}>{props.dict.getIn([item, 'title'])}</ToolLink>
            </ListItem>
          )) }
        </List>
      </Viewport>
    </Container>
  );
}

ToolsRelatedTool.propTypes = {
};

export default injectIntl(ToolsRelatedTool);
