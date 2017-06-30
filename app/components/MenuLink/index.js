/**
*
* MenuLink
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

export default styled(Link)`
  text-decoration: underline;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${p=>p.theme.ar?'13px':'14px'};
  line-height: ${p=>p.theme.ar?'24px':'22px'};
  color: #828486;
  display: block;
  padding-bottom: 0px;
  margin-bottom: 12px;
  margin-top: 0;
  padding-top: 0;

`;
