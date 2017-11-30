/**
*
* RegionIcon
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import Africa from 'assets/images/regions/africa.svg';
import Oceania from 'assets/images/regions/asia-pacific-oceania.svg';
import Asia from 'assets/images/regions/asia.svg';
import Europe from 'assets/images/regions/europe.svg';
import LatinAmericaCaribbean from 'assets/images/regions/latin-america-caribbean.svg';
import MiddleEast from 'assets/images/regions/middle-east.svg';
import NorthAmerica from 'assets/images/regions/north-america.svg';

import { getToolTypeColor } from 'components/CommonComponents';

const getIcon = (region) => {
  switch (region) {
    case 'africa': return Africa;
    case 'oceania': return Oceania;
    case 'asia': return Asia;
    case 'latin-america-and-the-caribbean': return LatinAmericaCaribbean;
    case 'middle-east': return MiddleEast;
    case 'north-america': return NorthAmerica;
  }
  return null;
}

const Container = styled.div`
  display: inline-block;
  svg { height: 32px; }
  svg, svg * {
    fill: ${props=> props.type?getToolTypeColor(props.type):(props.color || 'black')};
  }
`;
function RegionIcon(props) {
    const RegionIcon = getIcon(props.region);
  return (
    <Container type={props.type} color={props.color}>
      <Isvg src={RegionIcon} />
    </Container>
  );
}

RegionIcon.propTypes = {
  type: React.PropTypes.string,
  color: React.PropTypes.string,
  region: React.PropTypes.string.isRequired
};

export default RegionIcon;
