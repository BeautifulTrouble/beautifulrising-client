/*
 *
 * TrainingPage
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
import styled from 'styled-components';
import Markdown from 'react-remarkable';

import TrainingBanner from 'assets/images/about/training.jpg';
import PlatformsPageComponents from 'components/PlatformsPageComponents';
import OtherResources  from 'components/OtherResources';
import { loadData } from 'containers/App/actions';

//For listening
import { browserHistory } from 'react-router';

import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';

import messages from './messages';

const Container = styled.section`
  text-align: left;
`;
const Viewport = styled.div``;
const MenuArea = styled.div`
  width: 35%;
  float: left;
  padding-right: 70px;
  border-right: 3px solid;
  position: relative;

`;
const Header = styled.h1`text-align: center`;
const Heading = styled.h2`line-height: 40px;`;
const Lead = styled.div`
  a {
    color: #828486;
  }
`;
const MenuList = styled.ul`
padding: 0;
margin: 0;
`;
const LinkItem = styled.li`
  text-align: left;
  list-style: none;
  color: ${props => props.isSelected ? 'black' : '#828486'};
  text-transform: uppercase;
  text-decoration: ${props => props.isSelected ? 'none' : 'underline'};
  font-weight: bold;

  position: relative;
  button {
    text-decoration: ${props => props.isSelected ? 'none' : 'underline'};
  }

  &::before {
    display: ${props => props.isSelected ? 'block' : 'none'};
    content: '______';
    position: absolute;
    left: 350px;
    top: 25%;
    transform: translate(0,-50%);
  }
`;
const Button = styled.button`
  text-align: left;
  outline: none;
  cursor: pointer;

  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Avenir Black', sans-serif;
  margin-bottom: 18px;
  font-size: 15px;
`;
const Banner = styled.img``;

const ContentArea = styled.div`
  width: 60%;
  float: right;
  padding-left: 100px;
`;
const Content = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'} !important;
  padding-right: 170px;
  font-size: 14px;
  margin-top: 40px;
`;


const TrainingArea =styled.div`
  padding-bottom: 40px;
  border-bottom: 3px solid;
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

    if (!this.props.data.size || !this.props.data || this.props.data === undefined) {
      return null;
    }

    const trouble = this.props.data.get('trouble');

    console.log(this.props);
    return (
      <div>
        <Helmet
          title="TrainingPage"
          meta={[
            { name: 'description', content: 'Description of TrainingPage' },
          ]}
        />
        <Container>
          <Viewport>
            <Header>
              <FormattedMessage {...messages.header} />
            </Header>
            <TrainingArea>
              <MenuArea>
                <Heading>{trouble.get('heading')}</Heading>
                <Lead>
                  <Markdown source={trouble.get('lead')} />
                </Lead>
                <MenuList>
                {trouble.get('content').map((item, ind) => {
                  return (
                    <LinkItem key={ind} isSelected={this.state.selected === ind}>
                      <Button onClick={()=>this.handleClick(ind)}>
                        {item.get('heading')}
                      </Button>
                    </LinkItem>
                  )
                })}
                </MenuList>
              </MenuArea>
              <ContentArea>
                <Banner src={TrainingBanner} />
                {trouble.get('content').map((item, ind) => {
                  return (
                    <Content key={ind} isVisible={ ind === this.state.selected }>
                      <Markdown source={item.get('text')} />
                    </Content>
                  );
                })}
              </ContentArea>
            </TrainingArea>

            <OtherResourcesArea>
              <Heading>
                <FormattedMessage {...messages.otherResources} />
              </Heading>
              <OtherResources data={this.props.data.get('resources')}/>
            </OtherResourcesArea>
          </Viewport>
        </Container>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);
