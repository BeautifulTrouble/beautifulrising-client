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

 import { loadData } from 'containers/App/actions';
 import styled from 'styled-components';
 //For listening
 import { browserHistory } from 'react-router';

import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';

import messages from './messages';


const Title = styled.h1``;
const Subtitle = styled.h2``;
const Subsubtitle = styled.h3``;

const Content = styled.div``;

export class ContributePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
  }


  render() {
    console.log("ABOUT DATA", this.props);
    if(!this.props.aboutData || this.props.aboutData === undefined) {
      return null;
    }

    const contribute = this.props.aboutData.getIn(['contribute', 'misc']);
    if (contribute == null) { return null; }

    console.log("CONTRIBUTE", contribute);

    return (
      <div>
        <Helmet
          title="ContributePage"
          meta={[
            { name: 'description', content: 'Description of ContributePage' },
          ]}
        />
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>

        <Subtitle>
          {contribute.get('subheading')}
        </Subtitle>

        <Content>
          {contribute.get('introduction')}
        </Content>

        <Subsubtitle>
          {contribute.get('instructions-heading')}
        </Subsubtitle>
        
        <Content>
          {contribute.get('instructions')}
        </Content>

      </div>
    );
  }
}

ContributePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContributePage);
