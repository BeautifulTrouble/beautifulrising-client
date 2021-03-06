/**
*
* AuthorComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import SmallHeaderBlock from 'components/SmallHeaderBlock';

import { Link } from 'react-router';


function AuthorComponents() {
  return (
    <div>
    </div>
  );
}

AuthorComponents.propTypes = {

};

export const AuthorContainer = styled.section`
  padding-top: 36px;
  margin-bottom: 54px;
  direction: ${p=>p.theme.isArabic?'rtl':'ltr'} !important;
  display: flex;

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    flex-wrap: wrap;
  }
`;

export const AuthorImageArea = styled.div`
  border: 2px solid black;
  width: 100%;
  padding-bottom: 100%;
`;
export const AuthorImage = styled.span`
  width: 100%;
  height: 100%;
  background-image: url(${props=> props.image})

  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid black;
`;

export const AuthorName = styled(SmallHeaderBlock)`
  margin-bottom: 2px;
  margin-top: 2px;
  line-height: 19px;
  text-align: ${p=>p.theme.isArabic?'right':'left'} !important;
`;

export const AuthorLink = styled(Link)`
  color: rgb(130, 132, 134);
  display: inline-block;
  width: 200px;
  height: 170px;
  min-width: 200px;

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const AuthorDesc = styled.div`
  flex-grow: 1;
  text-align: ${p=>p.theme.isArabic?'right':'left'} !important;
  display: inline-block;
  padding-${p=>p.theme.isArabic?'right':'left'}: 28px;

  p {
    margin: 0;
  }

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
  }
`;

export default AuthorComponents;
