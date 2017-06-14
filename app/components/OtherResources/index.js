/**
*
* OtherResources
*
*/

import React from 'react';
import styled from 'styled-components';

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
  &::before {
    content: '____';
    position: absolute;
    top: -19px;
    left: 0;
    font-weight: 800;
    font-family: 'Avenir Black';
  }
`;

const ResourceList = styled.ul`
  padding-left: 70px;
`;
const Resource = styled.li`
  list-style: none;
  display: inline-block;
  width: 33%;
  vertical-align: top;
  font-size: 14px;
  padding-right: 40px;

  a {
    color: #828486;
    font-weight: bold;
  }
  p {
    font-style: italic;
  }
`;

const ResourceContainer =styled.div``;
const Header =styled.h4`
  font-size: 18px;
  font-family: Avenir Black, sans-serif;
`;

function OtherResources(props) {
  console.log(props);
  return (
    <Container>
      <Viewport>
        <ResourceTypeList>
        {
          props.data.get('all').map((resourceType, index) => (
            <ResourceType key={index}>
              <Header>{ resourceType.get('name') }</Header>
              <ResourceContainer>
                <ResourceList>
                {resourceType.get('resources').map((resource, resInd)=> (
                  <Resource key={resourceType.get('name') + resInd}>
                    <a href={resource.get('link')} target='_blank'>{resource.get('title')}</a>
                    <p>{resource.get('description')}</p>
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
  );
}

OtherResources.propTypes = {

};

export default OtherResources;
