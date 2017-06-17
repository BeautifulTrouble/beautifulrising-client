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
import { createStructuredSelector } from 'reselect';

import { loadData } from 'containers/App/actions';

import TheToolbox from 'components/AboutPageComponents/TheToolbox';
import Partners from 'components/AboutPageComponents/Partners';
import OurValues from 'components/AboutPageComponents/OurValues';
import OurTeam from 'components/AboutPageComponents/OurTeam';
import OurProcess from 'components/AboutPageComponents/OurProcess';
import OurAdvisoryNetwork from 'components/AboutPageComponents/OurAdvisoryNetwork';
import FAQ from 'components/AboutPageComponents/FAQ';
import BeautifulTroubleAA from 'components/AboutPageComponents/BeautifulTroubleAA';
import { makeSelectAllToolsWithSlugIndex, makeSelectAdvisoryBoard } from 'containers/App/selectors';

import msg from './messages';



const Msg = FormattedMessage;

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      activateAnchor: false,
      currentPath: null,
      currentOffset: null
    }
  }

  // The delay is so that the receiveProps and didMount
  // will not go against eachother
  componentDidMount() {
    if (this.props.aboutData) {
      this.props.onPageLoad();
    }

    const reference = browserHistory.getCurrentLocation().pathname;
    const targetNode = ReactDOM.findDOMNode(this.refs[reference]);
    if (targetNode) {
      window.scrollTo(0, targetNode.offsetTop);
      setTimeout(() => { this.setState({ activateAnchor: true }); }, 100);
    }
  }

  componentWillReceiveProps(nextProps) {
    const reference = browserHistory.getCurrentLocation().pathname;
    const targetNode = ReactDOM.findDOMNode(this.refs[reference]);

    if (targetNode && this.state.activateAnchor) {
      this.setState({ activateAnchor : false, currentPath: reference, currentOffset: targetNode.offsetTop });
      window.scrollTo(0, targetNode.offsetTop);
      setTimeout(() => { this.setState({ activateAnchor: true }); }, 100);
    }
  }

  // This puts the path on top of the route stack
  componentIsVisible(isVisible, aboutPath) {
    //
    // if (isVisible && !this.refs[this.state.currentPath] && this.refs[aboutPath]) {
    //     if (this.refs[aboutPath]) {
    //       // this.setState({ activateAnchor : false });
    //       const container = ReactDOM.findDOMNode(this.refs[aboutPath])
    //
    //       this.props.dispatch(push(aboutPath));
    //       this.setState({ currentPath: aboutPath, currentOffset: container.offsetTop })
    //     }
    //     // setTimeout(() => { this.setState({ activateAnchor : true, currentPath: aboutPath })}, 100);
    // } else if (isVisible && browserHistory.getCurrentLocation().pathname != aboutPath && this.state.activateAnchor) {
    //   //Set this as the url
    //     const container = ReactDOM.findDOMNode(this.refs[aboutPath])
    //     const position = window.scrollY - container.offsetTop;
    //
    //     if (this.state.currentPath !== aboutPath) {
    //
    //       // if items are in window
    //       const currentDOM = ReactDOM.findDOMNode(this.refs[this.state.currentPath]);
    //       const newDOM = ReactDOM.findDOMNode(this.refs[aboutPath]);
    //
    //       const currentOffset = currentDOM.offsetTop - window.scrollY;
    //       const newOffset = newDOM.offsetTop - window.scrollY;
    //       // if the DOM is higher, it dominates
    //
    //       if ((currentOffset < 0 || currentOffset > window.innerHeight) && isVisible) {
    //         this.setState({ activateAnchor : false });
    //         // this.setState({currentPath: aboutPath})
    //         this.props.dispatch(push(aboutPath));
    //         setTimeout(() => { this.setState({ currentPath: aboutPath, currentOffset: newDOM.offsetTop  })}, 10);
    //         setTimeout(() => { this.setState({ activateAnchor : true })}, 100);
    //       }
    //       // else if (isVisible && currentOffset > 0
    //       //           && currentOffset < window.innerHeight
    //       //           && currentOffset < newOffset
    //       //           && newDom.offsetTop > this.state.currentOffset
    //       //         ) {
    //       //   this.setState({ activateAnchor : false });
    //       //   // this.setState({currentPath: aboutPath})
    //       //   this.props.dispatch(push(aboutPath));
    //       //   setTimeout(() => { this.setState({ currentPath: aboutPath, currentOffset: newDOM.offsetTop })}, 0);
    //       //   setTimeout(() => { this.setState({ activateAnchor : true })}, 100);
    //       // }
    //
    //   }
    // }
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

        <TheToolbox  ref={"/about/whats-inside"} targetRoute="/about/whats-inside"  onChange={ this.componentIsVisible.bind(this) } />
        <OurProcess ref={"/about/process"}
              targetRoute="/about/process"
              onChange={this.componentIsVisible.bind(this) }
              participants={this.props.aboutData.get('workshop-participants')}
              />

        <OurValues
            ref="/about/values"
            targetRoute="/about/values"
            onChange={this.componentIsVisible.bind(this) }
            ourValues={this.props.aboutData.getIn(['about', 'values'])}
        />

        <OurAdvisoryNetwork
            ref="/about/advisory-network"
            targetRoute="/about/advisory-network"
            onChange={this.componentIsVisible.bind(this) }
            advisoryNetwork = {this.props.advisoryBoard}
        />
        <OurTeam
            ref="/about/team"
            targetRoute="/about/team"
            onChange={this.componentIsVisible.bind(this) }
            teamMembers={this.props.aboutData.getIn(['about', 'team-members'])}
            allData={this.props.aboutData}
        />
        <BeautifulTroubleAA
            ref="/about/beautiful-trouble-and-action-aid"
            targetRoute="/about/beautiful-trouble-and-action-aid"
            onChange={this.componentIsVisible.bind(this) }
            allData={this.props.aboutData}
        />
        <Partners
            ref="/about/partners"
            targetRoute="/about/partners"
            onChange={ this.componentIsVisible.bind(this) }
            networkPartners={this.props.aboutData.getIn(['about', 'network-partners'])}
        />
        <FAQ
            ref="/about/faq"
            targetRoute="/about/faq"
            onChange={this.componentIsVisible.bind(this) }
            questions={this.props.aboutData.getIn(['about', 'questions'])}
        />
      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  aboutData: makeSelectAllToolsWithSlugIndex(),
  advisoryBoard: makeSelectAdvisoryBoard()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
