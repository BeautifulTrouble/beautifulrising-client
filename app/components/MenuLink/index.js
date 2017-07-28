/**
*
* MenuLink
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';


// This considers the p.to to be relative and not absolute.
// TODO: Make it so that the link allows for absolute
export default styled(Link)`
  text-decoration: ${p=>p.to === window.location.pathname ? "none" : "underline"} ;;
  font-weight: bold;
  text-transform: uppercase;
  color: ${p=>p.to === window.location.pathname ? "black" : "#828486"} ;
  display: block;
  padding-bottom: 0px;
  margin-bottom: 20px;
  margin-top: 0;
  padding-top: 0;

  font-size: 12px;

`;
