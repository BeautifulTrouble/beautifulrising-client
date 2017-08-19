/*
 *
 * TrainingPage
 *
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import { push,replace } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import Markdown from 'react-remarkable';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import TrainingBanner from 'assets/images/about/training.jpg';
import OtherResources  from 'components/OtherResources';
import SubmitResource from 'containers/SubmitResource';
import CollapsingSection from 'components/CollapsingSection';
import { loadData } from 'containers/App/actions';

//For listening
import { browserHistory } from 'react-router';

import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';

const Container = styled.section`
  text-align: ${props=>props.lang==='ar'?'right':'left'};
`;
const Viewport = styled.div``;
const MenuArea = styled.div`
  width: 35%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  padding-${props=>props.lang==='ar'?'left':'right'}: 70px;
  border-${props=>props.lang==='ar'?'left':'right'}: 2px solid;
  position: relative;

  @media(max-width: 1170px) {
    width: 100%;
    float: none;
    padding: 0;
    border: none;
  }

`;
const Header = styled.h1`text-align: center
  font-size: 48px;
`;
const Heading = styled.h2`
  line-height: 40px;
  text-align: ${props=>props.lang==='ar'?'right':'left'};
`;
const Lead = styled.div`
    margin-bottom: 36px;
`;

const MenuList = styled.ul`
padding: 0;
margin: 0;

@media(max-width: 1170px) {
  display: none;
}
`;
const LinkItem = styled.li`
  text-align: ${props=>props.lang==='ar'?'right':'left'};
  list-style: none;
  color: ${props => props.isSelected ? 'black' : '#828486'};
  text-transform: uppercase;
  text-decoration: ${props => props.isSelected ? 'none' : 'underline'};
  font-weight: bold;

  position: relative;
  button {
    text-align: ${props=>props.lang==='ar'?'right':'left'};
    text-decoration: ${props => props.isSelected ? 'none' : 'underline'};
  }

  &::before {
    display: ${props => props.isSelected ? 'block' : 'none'};
    content: '______';
    position: absolute;
    ${props=>props.lang==='ar'?'left':'right'}: -105px;
    top: 25%;
    transform: translate(0,-50%);
  }
`;
const Button = styled.button`
  text-align: ${props=>props.lang==='ar'?'right':'left'} !important;
  outline: none;
  cursor: pointer;

  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  margin-bottom: 18px;
  font-size: ${props=>props.lang==='ar'?'13px':'14px;'};
  line-height: 22px;
  padding-${props=>props.lang==='ar'?'right':'left'}: 0;

  @media(max-width: 1170px) {
    margin-bottom: 0;
    margin: 0;
    padding: 10px 0;
    width: 100%;
  }
`;
const Banner = styled.img`
  display: block;
  @media(max-width: 1170px) {
    display: none;
  }
`;

const MobileBanner = styled.img`
  display: none;
  @media(max-width: 1170px) {
    display: block;
    width: 100%;
  }
`;

const MobileTrainingList = styled.div`
display: none;
@media(max-width: 1170px) {
  display: block;
  width: 100%;
}`;
const ContentArea = styled.div`
  width: 60%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  padding-${props=>props.lang==='ar'?'right':'left'}: 100px;

  @media(max-width: 1170px) {
    display: none;
  }
`;
const Content = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'} !important;
  padding-${props=>props.lang==='ar'?'left':'right'}: 170px;
  margin-top: 40px;

  @media(max-width: 1170px) {
    display: block !important;
    padding-right: 0;
    margin-top: 0;
    margin-bottom: 60px;
  }
`;


const TrainingArea =styled.div`
  border-bottom: 2px solid;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 72px;

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }

  @media(max-width: 1170px) {
    padding-bottom: 20px;
  }
`;

const OtherResourcesHeading = styled(Heading)`
  padding-top: 36px
`;

const OtherResourcesArea = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const SubmitResourcesArea = styled.div`
  margin-top: 72px;
  text-align: center;
`;
export class TrainingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  componentDidMount() {
    if (!this.props.data.size || !this.props.data || this.props.data === undefined) {
      this.props.onPageLoad();
    }

  }

  handleClick(clicked) {
    this.setState({ selected: clicked });
  }

  render() {
    const section = this.props.params.section;
    const lang = this.props.intl.locale;

    if (!this.props.data.size || !this.props.data || this.props.data === undefined) {
      return null;
    }

    const trouble = this.props.data.get('trouble');

    return (
      <LanguageThemeProvider>
        <Helmet
          title="TrainingPage"
          meta={[
            { name: 'description', content: 'Description of TrainingPage' },
          ]}
        />
        <Container>
          <Viewport>
            <Header>
              <TranslatableStaticText {...staticText.header} />
            </Header>
            <TrainingArea lang={lang}>
              <MenuArea lang={lang}>
                <MobileBanner  src={TrainingBanner} />
                <Heading lang={lang}>{trouble.get('heading')}</Heading>
                <Lead>
                  <ContentBlock>
                    <Markdown source={trouble.get('lead')} />
                  </ContentBlock>
                </Lead>

                <MobileTrainingList>
                  {trouble.get('content').map((item, ind) => {
                    return (
                      <CollapsingSection
                        key={ind}
                        header={
                            (<Button onClick={()=>this.handleClick(ind)}>
                              {item.get('heading')}
                            </Button>
                            )
                        }
                        shouldOpen={ind === this.state.selected}
                      >
                        <Content key={ind} isVisible={ ind === this.state.selected }>
                          <Markdown source={item.get('text')} />
                        </Content>
                      </CollapsingSection>
                    )
                  })}
                </MobileTrainingList>

                <MenuList lang={lang}>
                {trouble.get('content').map((item, ind) => {
                  return (
                    <LinkItem lang={lang} key={ind} isSelected={this.state.selected === ind}>
                      <Button onClick={()=>this.handleClick(ind)}>
                        {item.get('heading')}
                      </Button>
                    </LinkItem>
                  )
                })}
                </MenuList>
              </MenuArea>
              <ContentArea lang={lang}>
                <ContentBlock>
                  <Banner src={TrainingBanner} />
                  {trouble.get('content').map((item, ind) => {
                    return (
                      <Content key={ind} isVisible={ ind === this.state.selected }>
                        <Markdown source={item.get('text')} />
                      </Content>
                    );
                  })}
                </ContentBlock>
              </ContentArea>
            </TrainingArea>

            <OtherResourcesArea>
              <OtherResourcesHeading lang={lang}>
                <TranslatableStaticText {...staticText.otherResources} />
              </OtherResourcesHeading>
              <OtherResources data={this.props.data.get('resources')}/>
            </OtherResourcesArea>

            <SubmitResourcesArea>
              <SubmitResource />
            </SubmitResourcesArea>
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

TrainingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  data: makeSelectAllToolsWithSlugIndex()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(TrainingPage));
