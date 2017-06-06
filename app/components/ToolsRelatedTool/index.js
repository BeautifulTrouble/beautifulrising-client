/**
*
* ToolsRelatedTool
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { getToolTypeColor } from 'components/CommonComponents';

const Container = styled.div`
  text-align: left;
`;

const Viewport = styled.div``;

const List = styled.ul`
padding: 0;
margin: 0 0 0 23px;
`;

const ListItem = styled.li`
  list-style: square;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ToolLink = styled(Link)`
  color: ${props => getToolTypeColor(props.type)};
`;

function ToolsRelatedTool(props) {

  return (
    <Container>
      <Viewport>
        <List>
          {props.relatedTools.map(item => (
            <ListItem key={item}>
              <ToolLink type={props.type} to={`/tool/${item}`}>{props.dict.getIn([item, 'title'])}</ToolLink>
            </ListItem>
          )) }
        </List>
      </Viewport>
    </Container>
  );
}

ToolsRelatedTool.propTypes = {
};

export default ToolsRelatedTool;
