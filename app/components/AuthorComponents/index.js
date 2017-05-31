/**
*
* AuthorComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
const AUTHOR_BASE_IMAGE = "https://beautifulrising.org/assets/content/small-";

function AuthorComponents() {
  return (
    <div>
    </div>
  );
}

AuthorComponents.propTypes = {

};

export const AuthorContainer = styled.section`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const AuthorImageArea = styled.div`
  border: 2px solid black;
  height: 220px;
  width: 220px;
`;
export const AuthorImage = styled.span`
  width: 100%;
  height: 100%;
  background-image: url(${props=>AUTHOR_BASE_IMAGE + props.image})

  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const AuthorName = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 2px;
  margin-top: 2px;
`;

export const AuthorLink = styled(Link)`
  color: rgb(130, 132, 134);
`;

export const AuthorDesc = styled.p`
  margin: 2px;
  line-height: 1;
  font-size: 14px;
  text-align: left;
`;

export default AuthorComponents;
