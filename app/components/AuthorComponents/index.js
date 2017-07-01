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
  width: 100%;
  padding-bottom: 100%;
`;
export const AuthorImage = styled.span`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-image: url(${props=>AUTHOR_BASE_IMAGE + props.image})

  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid black;
`;

export const AuthorName = styled.h3`
  font-size: 19px;
  line-height: 19px;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 2px;
  margin-top: 2px;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
  letter-spacing: 0;
`;

export const AuthorLink = styled(Link)`
  color: rgb(130, 132, 134);
  display: block;
  width: 100%;
`;

export const AuthorDesc = styled.div`
  margin: 2px;
`;

export default AuthorComponents;
