/*
 *
 * PlatformsPage
 *
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push,replace } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import VisibilitySensor from 'react-visibility-sensor';
import { slugify } from 'utils/tags';
import ChatbotIcon from 'assets/images/platform/chatbot.svg';
import GameIcon from 'assets/images/platform/game.svg';
import PDFIcon from 'assets/images/platform/pdf.svg';

import Platform from 'containers/Platform';
import Header from 'components/PlatformsPage/Header';

import { loadData } from 'containers/App/actions';

//For listening
import { browserHistory } from 'react-router';

import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';

import messages from './messages';

export class PlatformsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activateAnchor: false
    }
  }

  // The delay is so that the receiveProps and didMount
  // will not go against eachother
  componentDidMount() {

    if (!this.props.aboutData.size || !this.props.aboutData || this.props.aboutData === undefined) {
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
      this.setState({ activateAnchor : false });
      window.scrollTo(0, targetNode.offsetTop);
      setTimeout(() => { this.setState({ activateAnchor: true }); }, 100);
    }
  }

  // This puts the path on top of the route stack
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

  renderPlatforms() {
    const miscellaneous = this.props.aboutData.getIn(['platforms', 'misc']);
    if(!miscellaneous) { return null; }
    const platforms = this.props.aboutData.getIn(['platforms', 'all']).toJS()
    return platforms.map((item, index) => (
      <VisibilitySensor
        key={`${index}--${slugify(item.title)}`}
        onChange={(isVisible) => this.componentIsVisible(isVisible, `/platforms/${slugify(item.title)}`)}>
        <div>
          <Platform
            ref={`/platforms/${slugify(item.title)}`}
            targetRoute={`/platforms/${slugify(item.title)}`}
            content={item}
            misc={miscellaneous}
          />
        </div>
      </VisibilitySensor>
    ))
  }

  render() {
    if(!this.props.aboutData || this.props.aboutData === undefined) {
      return null;
    }

    const miscellaneous = this.props.aboutData.getIn(['platforms', 'misc']);
    if(!miscellaneous) { return null; }

    return (
      <div>
        <Helmet
          title="PlatformsPage"
          meta={[
            { name: 'description', content: 'Description of PlatformsPage' },
          ]}
        />
        <Header>{miscellaneous.get('heading')}</Header>

        { this.renderPlatforms() }
      </div>
    );
  }
}

PlatformsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutData: makeSelectAllToolsWithSlugIndex()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlatformsPage);
