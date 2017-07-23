/*
 *
 * PlatformsPage
 *
 */
 //For listening
import { browserHistory } from 'react-router';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { push,replace } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import VisibilitySensor from 'react-visibility-sensor';

import ContributeType from 'containers/ContributeType';
import { loadData } from 'containers/App/actions';
import BlockViewItem from 'containers/HomePage/BlockViewItem';

import { makeSelectAllToolsWithSlugIndex,
        makeSelectExamples} from 'containers/App/selectors';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import SmallHeaderBlock from 'components/SmallHeaderBlock';

import Title from 'components/ContributePage/Title';
import Subtitle from 'components/ContributePage/Subtitle';
import Subsubtitle from 'components/ContributePage/Subsubtitle';
import Content from 'components/ContributePage/Content';
import Divider from 'components/ContributePage/Divider';
import ContributeTypeContainer from 'components/ContributePage/ContributeTypeContainer';

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
      <LanguageThemeProvider>
        <Helmet
          title="ContributePage"
          meta={[
            { name: 'description', content: 'Description of ContributePage' },
          ]}
        />
        <Title>
          {contribute.get('heading')}
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
            {contribute.get('prompt')}
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
      </LanguageThemeProvider>
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
