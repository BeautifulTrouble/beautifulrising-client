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

function RelatedToolsList(props) {
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

RelatedToolsList.propTypes = {
};

export default injectIntl(RelatedToolsList);
