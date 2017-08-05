/**
*
* OnboardingContent
*
*/

import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Isvg from 'react-inlinesvg';
import ArrowIcon from 'assets/images/icons/arrow.svg';
import Background from 'assets/images/modal.jpg';
import CloseIcon from 'assets/images/icons/close.svg'
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { loadData } from 'containers/App/actions';


import FAQ from 'containers/AboutPage/FAQ';
import TheToolbox from 'containers/AboutPage/TheToolbox';
import Partners from 'containers/AboutPage/Partners';
import OurValues from 'containers/AboutPage/OurValues';
import OurTeam from 'containers/AboutPage/OurTeam';
import OurProcess from 'containers/AboutPage/OurProcess';
import OurAdvisoryNetwork from 'containers/AboutPage/OurAdvisoryNetwork';
import BeautifulTroubleAA from 'containers/AboutPage/BeautifulTroubleAA';

import { makeSelectAllToolsWithSlugIndex, makeSelectAdvisoryBoard } from 'containers/App/selectors';
import { onboardUser } from 'containers/OnboardingModal/actions';
import { injectIntl } from 'react-intl';
import messages from './messages';

const Container = styled.section``;
const Viewport = styled.div`
position: relative;
`;
const Header = styled.h2`
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  border-bottom: 2px solid;
  ${p=>p.lang==='ar'?'padding-right':'padding-left'}: 20px;
  width: 100%;
  display: inline-block;
  padding-bottom: 15px;
  margin-bottom: 0;
  position:relative;
  padding-top: 9px;

  &::after {
    content: ' ';
    position: absolute;
    height: 110px;
    border-right: 1px solid;
    width: 1PX;
    bottom: -65px;
    left: ${p=>p.leftLine || '50%'};
    opacity: ${p=>p.showLine?'1':'0'};
    transition: opacity 0.3s ease;
  }
`;
const Content = styled.div`
  display: ${props=>props.show ? 'block' : 'none'};
  padding-top: 50px;
`;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
`;
const List = styled.ul`
  padding: 0;
  margin: 20px 50px;
`;
const CloseButton = styled(Button)`
  background: white;
  padding: 0;
  position: absolute;
  ${p=>p.lang==='ar'?'left':'right'}: -27px;
  top: 27px;
`;
const OnboardedButton = styled(Button)`
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  font-weight: 800;
  font-size: 12px;
  text-align: center;
  background: white;
  width: 180px;
  text-transform: uppercase;
  color: black;
  border: 2px solid;
  padding: 10px 21px;
  position: absolute;
  bottom: -100px;
  ${p=>p.lang==='ar'?'right':'left'}: 50%;
  transform: ${p=>p.lang==='ar'?'translate(50%,0)':'translate(-50%,0)'};
`;

const ListItem = styled.li`
  list-style: none;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  padding-${p=>p.lang==='ar'?'left':'right'}: 30px;
  button { width: 100%; margin-${p=>p.lang==='ar'?'left':'right'}: 20px;}
  h2 {
    font-size: 20px;
  }
  button span.isvg {
    position: absolute;
    ${p=>p.lang==='ar'?'left':'right'}: 20px;
  }
  button svg {
    transition: transform 0.4s ease;
    width: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 3px 0 0;
    margin-${p=>p.lang==='ar'?'right':'left'}: 8px;
    * {
      fill: ${props=>props.selected ? 'black' : '#AFAFAF'};
    }

    ${p=> {
      if (p.lang==='ar') {
        return `transform: ${p.selected ? 'rotate(270deg)' : 'rotate(360deg)'}`;
      } else {
        return `transform: ${p.selected ? 'rotate(270deg)' : 'rotate(180deg)'}`;
      }
    }};
  }
`;

const HeaderArea = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.6);


  color: white;
`;
const Arrow = styled(Isvg)`
  // float: ${p=>p.lang==='ar'?'right':'left'};
`
const LogoArea = styled.div`

  svg, svg * {
    fill: white !important;
  }
`;
const SubTitle = styled.h2`
  margin: 0;
`;
const Spiel = styled.div`
  width: 42%;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  padding: 120px 39px 30px;
`;

class OnboardingContent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      chosen: null
    };
  }

  componentDidMount(){
    if (this.props.aboutData.size === 0) {
      this.props.onPageLoad();
    }
  }
  handleClick(key) {
    if (this.state.chosen == key) {
      this.setState({ chosen: null });
    } else {
      this.setState({ chosen: key });
    }
  }

  handleClose() {
    this.props.onOnboard();
  }

  render() {
    const PAGE_STRUCTURE = this.renderData();
    const lang = this.props.intl.locale;
    const about = PAGE_STRUCTURE==null? Map() :
                    this.props.aboutData.get('about');

    return (
      <LanguageThemeProvider>
        <Container>
          <Viewport>
            <HeaderArea>
              <Overlay>
                <CloseButton lang={lang} onClick={this.handleClose.bind(this)}>
                  <Isvg src={CloseIcon}/>
                </CloseButton>
                {/*<OnboardedButton lang={lang} onClick={this.handleClose.bind(this)}>
                  {about.getIn(['modal','dismiss'])}
                </OnboardedButton>
                */}
                <LogoArea>
                  <Logo top={'20px'} left={'40px'} isReversed={true}/>
                </LogoArea>
                <SubTitle>
                  {about.getIn(['modal','welcome'])}
                </SubTitle>
                <Spiel>
                  <ContentBlock>
                    {about.getIn(['modal','introduction'])}
                  </ContentBlock>
                </Spiel>
              </Overlay>
            </HeaderArea>
            <List >
              { (PAGE_STRUCTURE||[]).map((item, index) => (

                  <ListItem lang={lang} key={index} selected={this.state.chosen === index}>
                    <Button lang={lang} onClick={() => this.handleClick(index)}>
                        <Header lang={lang} leftLine={item.left} showLine={this.state.chosen === index}>
                          {item.title}
                          <Arrow src={ArrowIcon} lang={lang}/>
                        </Header>
                      </Button>
                    <Content show={this.state.chosen === index}>
                      {item.content}
                    </Content>
                  </ListItem>
              ))

              }
            </List>
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }


  renderData() {
    if (this.props.aboutData.size == 0 || !this.props.aboutData || this.props.aboutData == undefined) return null;
    const about = this.props.aboutData.get('about');
    const misc = this.props.aboutData.getIn(['about', 'misc']);
    return [
      {
        title: misc.get('whats-inside'),
        content: <TheToolbox hideHeader={true}
                  whatsInside = { this.props.aboutData.getIn(['about','whats-inside', 'introduction']) }
                />
      },
      {
        title: misc.get('process'),
        content: <OurProcess ref={"/about/process"}
                  targetRoute="/about/process"
                  hideHeader={true}
                  header = { this.props.aboutData.getIn(['about', 'misc', 'process'])}
                  participants={this.props.aboutData.get('workshop-participants')}
                  processes={this.props.aboutData.getIn(['about', 'process']) ? this.props.aboutData.getIn(['about', 'process']).toJS() : null}
                />
      },
      {
        title: misc.get('values'),
        content: <OurValues hideHeader={true}
            ourValues={this.props.aboutData.getIn(['about', 'values'])}
        />
      },
      // {
      //   left: '80%',
      //   title: misc.get('advisory-network'),
      //   content: <OurAdvisoryNetwork
      //       hideHeader={true}
      //       advisoryNetwork = {this.props.advisoryBoard}
      //       introText = { this.props.aboutData.getIn(['about', 'advisory-network', 'introduction'])}
      //   />
      // },
      // {
      //   title: misc.get('team'),
      //   content: <OurTeam
      //       hideHeader={true}
      //       teamMembers={this.props.aboutData.getIn(['about', 'team-members'])}
      //       allData={this.props.aboutData}
      //   />
      // },
      // {
      //   title: misc.get('beautiful-trouble-and-action-aid'),
      //   content: <BeautifulTroubleAA
      //       hideHeader={true}
      //       allData={this.props.aboutData}
      //   />
      // },
      {
        title: misc.get('partners'),
        content: <Partners
          hideHeader={true}
            networkPartners={this.props.aboutData.getIn(['about', 'network-partners'])}
        />
      },
      // {
      //   title: misc.get('faq'),
      //   content: <FAQ
      //       hideHeader={true}
      //       questions={this.props.aboutData.getIn(['about', 'questions'])}
      //   />
      // },
    ];
  }
}

OnboardingContent.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  aboutData: makeSelectAllToolsWithSlugIndex(),
  advisoryBoard: makeSelectAdvisoryBoard()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onOnboard: (evt) => {
      dispatch(onboardUser());
    },
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(OnboardingContent));
