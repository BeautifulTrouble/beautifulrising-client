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

 //For listening
 import { browserHistory } from 'react-router';

import Chatbot from 'components/PlatformsPageComponents/Chatbot';
import Game from 'components/PlatformsPageComponents/Game';
import PDF from 'components/PlatformsPageComponents/PDF';

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
    return (
      <div>
        <Helmet
          title="PlatformsPage"
          meta={[
            { name: 'description', content: 'Description of PlatformsPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />


        <Chatbot ref="/platforms/chatbot" targetRoute="/platforms/chatbot"  onChange={ this.componentIsVisible.bind(this) } />
        <Game ref="/platforms/game" targetRoute="/platforms/game"   onChange={ this.componentIsVisible.bind(this) } />
        <PDF ref="/platforms/pdf" targetRoute="/platforms/pdf" onChange={ this.componentIsVisible.bind(this) } />
      </div>
    );
  }
}

PlatformsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PlatformsPage);
