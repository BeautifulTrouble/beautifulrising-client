/**
*
* ContinentIcon
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import messages from './messages';
import Africa from 'assets/images/regions/africa.svg';
import APOceania from 'assets/images/regions/asia-pacific-oceania.svg';
import Asia from 'assets/images/regions/asia.svg';
import Europe from 'assets/images/regions/europe.svg';
import LatinAmericaCarribean from 'assets/images/regions/latin-america-caribbean.svg';
import MiddleEast from 'assets/images/regions/middle-east.svg';
import NorthAmerica from 'assets/images/regions/north-america.svg';

const Content = styled.div`
  top: 0;
  ${p=>p.lang==='ar'?'left':'right'}: 50px;
  text-align: ${p=>p.lang==='ar'?'left':'right'};
  position: absolute;
`;

const Continent = styled.div`
  svg { height: 40px; margin-top: 10px;}
  svg * {
    fill: #08eb8c;
  }
`;
const WhereWhen = styled.div`
  font-family: 'Avenir Black';
  font-size: 14px;
  line-height: 22px;
  color: white;
  text-transform: uppercase;
`;

class ContinentIcon extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  getRegionIcon(region) {
    switch(region) {
      case "North America": return NorthAmerica;
      case "Middle East": return MiddleEast;
      case "Asia": return Asia;
      case "Africa": return Africa;
      case "Latin America and the Caribbean": return LatinAmericaCarribean;
    }
  }

  render() {
    if (this.props.type !== "story") return null;

    const lang = this.props.intl.locale;
    return (
      <Content lang={lang}>
        <WhereWhen>{`${this.props.where} ${this.props.when}`}</WhereWhen>
        <Continent>
          <Isvg src={this.getRegionIcon(this.props.region)} />
        </Continent>
      </Content>
    );
  }
}

ContinentIcon.propTypes = {

};

export default injectIntl(ContinentIcon);
