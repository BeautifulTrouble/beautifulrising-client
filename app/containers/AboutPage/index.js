/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { push,replace } from 'react-router-redux';

//For listening
import { browserHistory } from 'react-router';

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
//
// browserHistory.listen( location =>  {
//  console.log("Location", location);
// });

export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      activateAnchor: false
    }
  }

  componentDidMount() {
    const reference = browserHistory.getCurrentLocation().pathname;
    const targetNode = ReactDOM.findDOMNode(this.refs[reference]);
    window.scrollTo(0, targetNode.offsetTop);
    setTimeout(() => { this.setState({ activateAnchor: true }); }, 100);
  }

  componentWillReceiveProps(nextProps) {

    const reference = browserHistory.getCurrentLocation().pathname;
    const targetNode = ReactDOM.findDOMNode(this.refs[reference]);

    if (targetNode && this.state.activateAnchor) {
      this.setState({ activateAnchor : false });
      window.scrollTo(0, targetNode.offsetTop);
      setTimeout(() => { this.setState({ activateAnchor: true }); }, 100);
    }
  }

  componentIsVisible(isVisible, aboutPath) {
    if (isVisible &&
        browserHistory.getCurrentLocation().pathname != aboutPath
        && this.state.activateAnchor) {
      //Set this as the url
        this.setState({ activateAnchor : false });
        this.props.dispatch(push(aboutPath));
        setTimeout(() => { this.setState({ activateAnchor : true })}, 100);
    }
  }

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

        <TheToolbox ref="/about/whats-inside" targetRoute="/about/whats-inside"  onChange={ this.componentIsVisible.bind(this) } />
        <OurProcess ref="/about/process" targetRoute="/about/process" onChange={this.componentIsVisible.bind(this) } />
        <OurValues ref="/about/values"  targetRoute="/about/values" onChange={this.componentIsVisible.bind(this) } />
        <OurAdvisoryNetwork ref="/about/advisory-network"  targetRoute="/about/advisory-network" onChange={this.componentIsVisible.bind(this) }/>
        <OurTeam ref="/about/team"  targetRoute="/about/team" onChange={this.componentIsVisible.bind(this) }/>
        <BeautifulTroubleAA ref="/about/beautiful-trouble-and-action-aid"  targetRoute="/about/beautiful-trouble-and-action-aid" onChange={this.componentIsVisible.bind(this) }/>
        <Partners ref="/about/partners"  targetRoute="/about/partners" onChange={this.componentIsVisible.bind(this) }/>
        <FAQ ref="/about/faq"  targetRoute="/about/faq" onChange={this.componentIsVisible.bind(this) }/>
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
