/**
*
* RegionOptions
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

import Isvg from 'react-inlinesvg';

import Africa from 'assets/images/regions/africa.svg';
import Oceania from 'assets/images/regions/asia-pacific-oceania.svg';
import Asia from 'assets/images/regions/asia.svg';
import Europe from 'assets/images/regions/europe.svg';
import LatinAmericaCaribbean from 'assets/images/regions/latin-america-caribbean.svg';
import MiddleEast from 'assets/images/regions/middle-east.svg';
import NorthAmerica from 'assets/images/regions/north-america.svg';

import Container from 'components/RegionOptions/Container';
import Viewport from 'components/RegionOptions/Viewport';
import Subheader from 'components/RegionOptions/Subheader';
import RegionList from 'components/RegionOptions/RegionList';
import Region from 'components/RegionOptions/Region';
import Disabled from 'components/RegionOptions/Disabled';
import RegionLink from 'components/RegionOptions/RegionLink';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from 'containers/ToolTypeArea/staticText';

const AllRegionLink = styled(RegionLink)`
  &::after {
    display: none;
  }
`;
function RegionOptions(props) {
  const lang = props.intl.locale;

  return (
    <Container inline={!props.showHeader}>
      <Viewport lang={lang}>
        <Subheader lang={lang} show={props.showHeader}>
          <TranslatableStaticText {...staticText.header} />
        </Subheader>
        <RegionList lang={lang}>
          <Region lang={lang} >
            <AllRegionLink to={'/type/story'} selected={props.region === undefined}>
              <TranslatableStaticText {...staticText.allHead} />
            </AllRegionLink>
          </Region>
          <Region>
            <RegionLink to={'/type/story/africa'} selected={props.region === 'africa'}>
              <Isvg src={Africa} />
            </RegionLink>
          </Region>
          <Region>
            <RegionLink to={'/type/story/latin-america-and-the-caribbean'} selected={props.region === 'latin-america-and-the-caribbean'}>
              <Isvg src={LatinAmericaCaribbean} />
            </RegionLink>
          </Region>
          <Region>
            <RegionLink to={'/type/story/north-america'} selected={props.region === 'north-america'}>
              <Isvg src={NorthAmerica} />
            </RegionLink>
          </Region>
          <Region>
            <RegionLink to={'/type/story/asia'} selected={props.region === 'asia'}>
              <Isvg src={Asia} />
            </RegionLink>
          </Region>
          <Region>
            <RegionLink to={'/type/story/europe'} selected={props.region === 'europe'}>
              <Isvg src={Europe} />
            </RegionLink>
          </Region>
          <Region>
            <RegionLink to={'/type/story/middle-east'} selected={props.region === 'middle-east'}>
              <Isvg src={MiddleEast} />
            </RegionLink>
          </Region>
          <Region>
            <Disabled>
              <Isvg src={Oceania} />
            </Disabled>
          </Region>
        </RegionList>
      </Viewport>
    </Container>
  );
}

RegionOptions.propTypes = {

};

export default injectIntl(RegionOptions);
