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
    ${props=>props.lang==='ar'?'right':'left'}: 350px;
    top: 25%;
    transform: translate(0,-50%);
  }
`;
const Button = styled.button`
  text-align: ${props=>props.lang==='ar'?'right':'left'};
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
`;
const Banner = styled.img``;

const ContentArea = styled.div`
  width: 60%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  padding-${props=>props.lang==='ar'?'right':'left'}: 100px;
`;
const Content = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'} !important;
  padding-${props=>props.lang==='ar'?'left':'right'}: 170px;
  margin-top: 40px;
`;


const TrainingArea =styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid;
  margin-left: 20px;
  margin-right: 20px;

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
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
                <Heading lang={lang}>{trouble.get('heading')}</Heading>
                <Lead>
                  <ContentBlock>
                    <Markdown source={trouble.get('lead')} />
                  </ContentBlock>
                </Lead>
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
              <Heading lang={lang}>
                <TranslatableStaticText {...staticText.otherResources} />
              </Heading>
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
