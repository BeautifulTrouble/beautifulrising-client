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

const Container = styled.section`
  display: ${props=>props.inline?'inline-block':'block'};
`;
const Viewport = styled.div`
  position: relative;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
`;

const Subheader = styled.h3`
  width: 50%;
  padding: 2px;
  border: solid;
  border-width: 0 0 2px;
  position: relative;
  display: ${props=> !props.show ? 'none' : 'block'};

  &::after {
    content: ' ';
    height: 40px;
    border: solid;
    width: 0px !important;
    position: absolute;
    ${p=>p.lang==='ar'?'left':'right'}: 30px;
    bottom: -20px;
    border-width: 0 1px 0 0;
  }
`;

const RegionList = styled.ul`
  padding: 0; margin: 0;
`;

const Region = styled.li`
  display: inline-block;
`;

const Disabled = styled.span`
  svg, svg * {
    fill: #dfdfdf !important;
  }
`;

const RegionLink = styled(Link)`
  svg, svg * {
    fill: ${props => props.selected ? 'black' : '#828486'}
  }
`;

function RegionOptions(props) {
  const lang = props.intl.locale;
  return (
    <Container inline={!props.showHeader}>
      <Viewport lang={lang}>
        <Subheader lang={lang} show={props.showHeader}>
          <FormattedMessage {...messages.header} />
        </Subheader>
        <RegionList lang={lang}>
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
            <Disabled>
              <Isvg src={NorthAmerica} />
            </Disabled>
          </Region>
          <Region>
            <RegionLink to={'/type/story/asia'} selected={props.region === 'asia'}>
              <Isvg src={Asia} />
            </RegionLink>
          </Region>
          <Region>
            <Disabled>
              <Isvg src={Europe} />
            </Disabled>
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
