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
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { Container, List, ListItem, ToolLink } from 'components/ToolPage/RelatedTools';
import Snapshot from 'containers/ToolPage/Snapshot';

function RelatedToolsList(props) {
  return (

      <Container lang={props.intl.locale}>
      <LanguageThemeProvider>
        <List lang={props.intl.locale}>
          {
            props.relatedTools.map(item => {

              if (props.dict.getIn([item, 'module-type-effective']) === 'snapshot' ) {
                return (
                  <ListItem key={item}>
                    <Snapshot {...props.dict.get(item).toJS()}>{props.dict.getIn([item, 'title'])}</Snapshot>
                  </ListItem>
                )
              }

              return (
                <ListItem key={item}>
                  <ToolLink to={`/tool/${item}`}>{props.dict.getIn([item, 'title'])}</ToolLink>
                </ListItem>
              );
            })
          }
        </List>
        </LanguageThemeProvider>
      </Container>
  );
}

RelatedToolsList.propTypes = {
};

export default injectIntl(RelatedToolsList);
