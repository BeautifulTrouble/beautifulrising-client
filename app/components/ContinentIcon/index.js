/**
*
* ContinentIcon
*
*/

import React from 'react';
import styled from 'styled-components';

import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { WhereWhen } from 'components/ToolPage/Header';
import { slugify } from 'utils/tags';

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
  text-align: ${p=>p.lang==='ar'?'left':'right'};
  margin-bottom: 20px;

  @media(max-width: 1320px) {
    display: inline-block;

    .where-when-desktop { display: none; }
  }
`;

const DesktopContent = styled.div`
  display: block;
  @media(max-width: 1320px) {
    display: none;
  }
`;
const Continent = styled.div`
  svg { height: 40px; margin-top: 10px;}
  svg * {
    fill: #08eb8c;
  }
  @media(max-width: 1320px) {
    margin-${p=>p.lang==='ar' ? 'left' : 'right'}: 10px;
  }
`;

class ContinentIcon extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  getRegionIcon(region) {
    switch (region) {
      case 'africa': return Africa;
      case 'oceania': return Oceania;
      case 'asia': return Asia;
      case 'latin-america-and-the-caribbean': return LatinAmericaCaribbean;
      case 'middle-east': return MiddleEast;
      case 'north-america': return NorthAmerica;
      case 'europe': return Europe
    }
    return null;
  }

  render() {
    if (this.props.type !== "story") return null;

    const lang = this.props.intl.locale;
    return (
        <Content lang={lang}>
          <DesktopContent>
            <WhereWhen {...this.props}/>
          </DesktopContent>
          <Continent lang={lang}>
            <Isvg src={this.getRegionIcon(this.props.regions && this.props.regions.length ? slugify(this.props.regions[0]) : '')} />
          </Continent>
        </Content>
    );
  }
}

ContinentIcon.propTypes = {

};

export default injectIntl(ContinentIcon);
