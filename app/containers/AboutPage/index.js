/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { push,replace } from 'react-router-redux';

import TheToolbox from 'components/AboutPageComponents/TheToolbox';
import Partners from 'components/AboutPageComponents/Partners';
import OurValues from 'components/AboutPageComponents/OurValues';
import OurTeam from 'components/AboutPageComponents/OurTeam';
import OurProcess from 'components/AboutPageComponents/OurProcess';
import OurAdvisoryNetwork from 'components/AboutPageComponents/OurAdvisoryNetwork';
import FAQ from 'components/AboutPageComponents/FAQ';
import BeautifulTroubleAA from 'components/AboutPageComponents/BeautifulTroubleAA';

import msg from './messages';



const Msg = FormattedMessage;
export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function



  toolboxIsVisible(isVisible) {
    // console.log("A", isVisible)
    if (isVisible) {
      //Set this as the url
      this.props.dispatch(replace('/about/whats-inside'));
    }
  }

  ourProcessIsVisible(isVisible) {
    if (isVisible) {
      this.props.dispatch(replace('/about/process'));
    }
  }

  ourValuesIsVisible(isVisible) {
    if (isVisible) {
      this.props.dispatch(replace('/about/values'));
    }
  }

  ourAdvisoryNetworkIsVisible(isVisible) {console.log("d",isVisible)}

  ourTeamIsVisible(isVisible) {console.log("e",isVisible)}

  beautifulTroubleAAisVisible() {console.log("f",isVisible)}
  partnersIsVisible() {console.log("g",isVisible)}
  faqIsVisible() {console.log("h",isVisible)}

  render() {
    return (
      <div>
        <Helmet
          title="AboutPage"
          meta={[
            { name: 'description', content: 'Description of AboutPage' },
          ]}
        />

        <h1><Msg {...msg.header} /></h1>
        <p><Msg {...msg.description} /></p>

        <TheToolbox onChange={this.toolboxIsVisible.bind(this) } />
        <OurProcess onChange={this.ourProcessIsVisible.bind(this) } />
        <OurValues onChange={this.ourValuesIsVisible.bind(this) } />

      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AboutPage);

// <VisibilitySensor  onChange={this.ourAdvisoryNetworkIsVisible}>
//   <OurAdvisoryNetwork/>
// </VisibilitySensor>
//
// <VisibilitySensor  onChange={this.ourTeamIsVisible}>
//   <OurTeam />
// </VisibilitySensor>
//
// <VisibilitySensor onChange={this.beautifulTroubleAAisVisible}>
//   <BeautifulTroubleAA />
// </VisibilitySensor>
//
// <VisibilitySensor onChange={this.partnersIsVisible}>
//   <Partners />
// </VisibilitySensor>
// <VisibilitySensor onChange={this.faqIsVisible}>
//   <FAQ />
// </VisibilitySensor>
