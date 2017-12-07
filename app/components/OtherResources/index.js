/**
*
* OtherResources
*
*/

import React from 'react';
import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import SmallHeaderBlock from 'components/SmallHeaderBlock';
import {injectIntl} from 'react-intl';
const Container = styled.div``;
const Viewport = styled.div`
  position: relative;
`;

const ResourceTypeList = styled.ul`
  padding: 0
`;
const ResourceType = styled.li`
  list-style: none;
  position:relative;

  margin-top: 36px;
`;

const ResourceList = styled.ul`
  padding-left: 70px;
  @media(max-width: 1320px) {
    padding: 0;
  }
`;
const Resource = styled.li`
  list-style: none;
  display: inline-block;
  width: 33%;
  vertical-align: top;
  padding-right: 40px;
  a {
    font-weight: bold;
  }
  p {
    font-style: italic;
  }

  @media(max-width: 1320px) {
    width: 100%;
    padding: 0;
    margin-top :10px;
    p { margin: 0;}
  }
`;

const ResourceContainer =styled.div``;
const Header =styled(SmallHeaderBlock)`
  position: relative;
  margin-bottom: 36px;
  &::before {
    position: absolute;
    content: "";
    width: 42px;
    border-top: 2px solid #000;
    margin-top: -12px;
  }
`;

function OtherResources(props) {
  const lang = props.intl.locale;
  return (
    <LanguageThemeProvider>
      <Container>
        <Viewport>
          <ResourceTypeList>
          {
            props.data.get('all').map((resourceType, index) => (
              <ResourceType key={index} lang={lang}>
                <Header lang={lang}>{ resourceType.get('name') }</Header>
                <ResourceContainer>
                  <ResourceList>
                  {resourceType.get('resources').map((resource, resInd)=> (
                    <Resource lang={lang} key={resourceType.get('name') + resInd}>
                      <ContentBlock>
                        <a href={resource.get('link')} target='_blank'>{resource.get('title')}</a>
                        {resource.get('who') && <span> | {resource.get('who')}</span>}
                        <p>{resource.get('description')}</p>
                      </ContentBlock>
                    </Resource>
                  ))}
                  </ResourceList>
                </ResourceContainer>
              </ResourceType>
            ))
          }
          </ResourceTypeList>
        </Viewport>
      </Container>
    </LanguageThemeProvider>
  );
}

OtherResources.propTypes = {

};

export default injectIntl(OtherResources);
