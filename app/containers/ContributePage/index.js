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
import ContributeType from 'components/ContributeType';
 import { loadData } from 'containers/App/actions';
 import styled from 'styled-components';

 import BlockViewItem from 'containers/HomePage/BlockViewItem';
 //For listening
 import { browserHistory } from 'react-router';

import { makeSelectAllToolsWithSlugIndex,
          makeSelectExamples} from 'containers/App/selectors';

import messages from './messages';


const Title = styled.h1`font-size: 48px;`;
const Subtitle = styled.h2`
  font-size: 19px;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
  letter-spacing: 0;
  border-bottom: 2px solid;
  padding-bottom: 20px;
  margin-bottom: 40px;
  margin-left: 30px;
  margin-right: 30px;
`;
const Subsubtitle = styled.h3`
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
  font-size: 18px;
  letter-spacing: 0;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const Content = styled.div`
  padding: 10px 60px;
  font-size: 14px;
  line-height: 22px;

`;

const Divider = styled.div`
&::after {
  content: ' '
  display: inline-block;
  width: 2px;
  border-right: 1px solid;
  height: 90px;
  position: absolute;
  left: 50%;
}
`;

const ContributeTypeContainer = styled.div`
  margin-top: 95px;
`;

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

    if (!this.props.aboutData.size || !this.props.aboutData || this.props.aboutData === undefined) {
      this.props.onPageLoad();
    }
  }


  render() {
    if(!this.props.aboutData || this.props.aboutData === undefined) {
      return null;
    }

    const contribute = this.props.aboutData.getIn(['contribute', 'misc']);
    if (contribute == null) { return null; }

    const storyEx = this.props.storyExamples;
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
          <Divider />
        </Content>

        <ContributeTypeContainer>
          <Subtitle>
            <FormattedMessage {...messages.typeOfContent} />
          </Subtitle>
          <ContributeType
            examples={{
              story: storyEx.map((item,ind) => (<BlockViewItem key={ind} {...item}/>)),
              principle: this.props.principleExamples.map((item,ind) => (<BlockViewItem key={ind} {...item}/>)),
              methodology: this.props.methodologyExamples.map((item,ind) => (<BlockViewItem key={ind} {...item}/>)),
              tactic: this.props.tacticExample.map((item,ind) => (<BlockViewItem key={ind} {...item}/>)),
              theory: this.props.theoryExample.map((item,ind) => (<BlockViewItem key={ind} {...item}/>))
            }}
          />
        </ContributeTypeContainer>
      </div>
    );
  }
}


ContributePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutData: makeSelectAllToolsWithSlugIndex(),
  principleExamples: makeSelectExamples('principle'),
  storyExamples: makeSelectExamples('story'),
  methodologyExamples: makeSelectExamples('methodology'),
  tacticExample: makeSelectExamples('tactic'),
  theoryExample: makeSelectExamples('theory')
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
