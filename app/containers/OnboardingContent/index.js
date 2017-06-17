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

import { connect } from 'react-redux';

import TheToolbox from 'components/AboutPageComponents/TheToolbox';
import Partners from 'components/AboutPageComponents/Partners';
import OurValues from 'components/AboutPageComponents/OurValues';
import OurTeam from 'components/AboutPageComponents/OurTeam';
import OurProcess from 'components/AboutPageComponents/OurProcess';
import OurAdvisoryNetwork from 'components/AboutPageComponents/OurAdvisoryNetwork';
import FAQ from 'components/AboutPageComponents/FAQ';
import BeautifulTroubleAA from 'components/AboutPageComponents/BeautifulTroubleAA';
import { makeSelectAllToolsWithSlugIndex, makeSelectAdvisoryBoard } from 'containers/App/selectors';
import { onboardUser } from 'containers/App/actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import aboutMessages from 'components/AboutPageComponents/messages';

const Container = styled.section``;
const Viewport = styled.div`
position: relative;
`;
const Header = styled.h2`
  font-family: 'Avenir Black', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  border-bottom: 2px solid;
  padding-left: 20px;
  width: 100%;
  display: inline-block;
  padding-bottom: 15px;
  margin-bottom: 0;
`;
const Content = styled.div`
  display: ${props=>props.show ? 'block' : 'none'};
`;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  text-align: left;
`;
const List = styled.ul`
  padding: 0;
  margin: 20px 50px;
`;
const CloseButton = styled(Button)`
  background: white;
  border: 2px solid black;
  padding: 0;
  position: absolute;
  right: -27px;
  top: 27px;
`;
const OnboardedButton = styled(Button)`
  font-family: 'Avenir Black', sans-serif;
  font-weight: 800;
  font-size: 12px;
  text-align: center;
  background: white;
  width: 160px;
  padding: 5px;
  text-transform: uppercase;
  color: black;
  border: 2px solid;
  padding: 0;
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%,0);
`;

const ListItem = styled.li`
  list-style: none;
  padding-right: 30px;
  button { width: 100%; margin-right: 20px;}
  h2 {
    font-size: 20px;
  }
  button svg {
    transform: ${props=>props.selected ? 'rotate(270deg)' : 'rotate(180deg)'};
    transition: transform 0.4s ease;
    width: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 3px 0 0 8px;
    * {
      fill: ${props=>props.selected ? 'black' : '#AFAFAF'};
    }
  }
`;

const HeaderArea = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.6);

  color: white;
`;
const LogoArea = styled.div`

  svg, svg * {
    fill: white !important;
  }
`;
const SubTitle = styled.h2`
  margin: 0;
`;
const Spiel = styled.div`
  width: 500px;
  font-size: 14px;
  line-height: 22px;
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

    return (
      <Container>
        <Viewport>
          <HeaderArea>
            <Overlay>
              <CloseButton onClick={this.handleClose.bind(this)}>
                <Isvg src={CloseIcon}/>
              </CloseButton>
              <OnboardedButton onClick={this.handleClose.bind(this)}>
                <FormattedMessage {...messages.onboardedMessage} />
              </OnboardedButton>
              <LogoArea>
                <Logo top={'20px'} left={'40px'} isReversed={true}/>
              </LogoArea>
              <SubTitle>
                <FormattedMessage {...messages.welcomeMessage} />
              </SubTitle>
              <Spiel>
                <FormattedMessage {...messages.welcomeSpiel} />
              </Spiel>
            </Overlay>
          </HeaderArea>
          <List >
            { PAGE_STRUCTURE.map((item, index) => (

                <ListItem key={index} selected={this.state.chosen === index}>
                  <Button onClick={() => this.handleClick(index)}><Header>
                      {item.title}
                      <Isvg src={ArrowIcon} />
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
    );
  }

  renderData() {
    return [
      {
        title: <FormattedMessage {...messages.toolbox} />,
        content: <TheToolbox hideHeader={true}
                  whatsInside = { this.props.aboutData.getIn(['about','whats-inside', 'introduction']) }
                />
      },
      {
        title: <FormattedMessage {...messages.howDidWeMake} />,
        content: <OurProcess hideHeader={true}
                    participants={this.props.aboutData.get('workshop-participants')}/>
      },
      {
        title: <FormattedMessage {...messages.values} />,
        content: <OurValues hideHeader={true}
            ourValues={this.props.aboutData.getIn(['about', 'values'])}
        />
      },
      {
        title: <FormattedMessage {...messages.advisoryNetwork} />,
        content: <OurAdvisoryNetwork
            hideHeader={true}
            advisoryNetwork = {this.props.advisoryBoard}
            introText = { this.props.aboutData.getIn(['about', 'advisory-network', 'introduction'])}
        />
      },
      {
        title: <FormattedMessage {...messages.team} />,
        content: <OurTeam
            hideHeader={true}
            teamMembers={this.props.aboutData.getIn(['about', 'team-members'])}
            allData={this.props.aboutData}
        />
      },
      {
        title: <FormattedMessage {...messages.btaa} />,
        content: <BeautifulTroubleAA
            hideHeader={true}
            allData={this.props.aboutData}
        />
      },
      {
        title: <FormattedMessage {...messages.partners} />,
        content: <Partners
          hideHeader={true}
            networkPartners={this.props.aboutData.getIn(['about', 'network-partners'])}
        />
      },
      {
        title: <FormattedMessage {...messages.faq} />,
        content: <FAQ
            hideHeader={true}
            questions={this.props.aboutData.getIn(['about', 'questions'])}
        />
      },
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContent);
