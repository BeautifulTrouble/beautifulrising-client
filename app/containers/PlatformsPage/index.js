/*
 *
 * PlatformsPage
 *
 */

 import React, { PropTypes } from 'react';
 import ReactDOM from 'react-dom';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { push,replace } from 'react-router-redux';
 import { createStructuredSelector } from 'reselect';
 import VisibilitySensor from 'react-visibility-sensor';

 import PlatformsPageComponents from 'components/PlatformsPageComponents';
 import { loadData } from 'containers/App/actions';

 //For listening
 import { browserHistory } from 'react-router';

import Chatbot from 'components/PlatformsPageComponents/Chatbot';
import Game from 'components/PlatformsPageComponents/Game';
import PDF from 'components/PlatformsPageComponents/PDF';

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
    console.log("ADATA", this.props.aboutData);

    if (!this.props.aboutData.size || !this.props.aboutData || this.props.aboutData === undefined) {
      console.log("Loading Data");
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

  render() {
    console.log("ABOUT DATA", this.props);
    if(!this.props.aboutData || this.props.aboutData === undefined) {
      return null;
    }

    return (
      <div>
        <Helmet
          title="PlatformsPage"
          meta={[
            { name: 'description', content: 'Description of PlatformsPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />

        <VisibilitySensor onChange={(isVisible) => this.componentIsVisible(isVisible, '/platforms/chatbot')}>
          <div>
            <PlatformsPageComponents
              ref="/platforms/chatbot"
              targetRoute="/platforms/chatbot"
              content={ this.props.aboutData.getIn(['platforms', 'chatbot'])}
            />
          </div>
        </VisibilitySensor>


        <VisibilitySensor onChange={(isVisible) => this.componentIsVisible(isVisible, '/platforms/game')}>
          <div>
            <PlatformsPageComponents
              ref="/platforms/game"
              targetRoute="/platforms/game"
              content={ this.props.aboutData.getIn(['platforms', 'game'])}
            />
          </div>
        </VisibilitySensor>


        <VisibilitySensor onChange={(isVisible) => this.componentIsVisible(isVisible, '/platforms/pdf')}>
          <div>
            <PlatformsPageComponents
              ref="/platforms/pdf"
              targetRoute="/platforms/pdf"
              content={ this.props.aboutData.getIn(['platforms', 'pdf'])}
            />
          </div>
        </VisibilitySensor>

      </div>
    );
  }
}

// <Game
//   ref="/platforms/game"
//   targetRoute="/platforms/game"
//   onChange={ this.componentIsVisible.bind(this) }
//   content={ this.props.aboutData.getIn(['platforms', 'game'])}
// />
// <PDF
//   ref="/platforms/pdf"
//   targetRoute="/platforms/pdf"
//   onChange={ this.componentIsVisible.bind(this) }
//   content={ this.props.aboutData.getIn(['platforms', 'pdf'])}
// />

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
