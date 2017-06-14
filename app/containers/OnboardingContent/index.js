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

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import aboutMessages from 'components/AboutPageComponents/messages';

const Container = styled.section``;
const Viewport = styled.div`
padding: 30px;
`;
const Header = styled.h2`
  font-family: 'Avenir Black', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
`;
const Content = styled.div`
  display: ${props=>props.show ? 'block' : 'none'}
`;
const Button = styled.button`
  outline: none;
`;
const List = styled.ul`
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
  border-bottom: 3px solid;
  padding-left: 20px;
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

  renderData() {
    return [
      {
        title: <FormattedMessage {...messages.toolbox} />,
        content: <TheToolbox hideHeader={true} />
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


  render() {
    const PAGE_STRUCTURE = this.renderData();

    return (
      <Container>
        <Viewport>
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
}

OnboardingContent.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  aboutData: makeSelectAllToolsWithSlugIndex(),
  advisoryBoard: makeSelectAdvisoryBoard()
});

export default connect(mapStateToProps)(OnboardingContent);
