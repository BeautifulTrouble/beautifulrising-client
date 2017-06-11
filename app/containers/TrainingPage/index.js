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
  width: 25%;
  float: left;
`;
const Heading = styled.h1``;
const Lead = styled.p``;
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

  button {
    text-decoration: ${props => props.isSelected ? 'none' : 'underline'};
  }
`;
const Button = styled.button`
  text-align: left;
  outline: none;
  cursor: pointer;
`;
const Banner = styled.img``;

const ContentArea = styled.div`
  width: 74%;
  float: right;
`;
const Content = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'} !important;
`;


export class TrainingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      selected: 'Training & facilitation'
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
            <MenuArea>
              <Heading>{trouble.get('heading')}</Heading>
              <Lead>{trouble.get('lead')}</Lead>
              <MenuList>
              {trouble.get('content').map((item, ind) => {
                return (
                  <LinkItem key={ind} isSelected={this.state.selected === item.get('heading')}>
                    <Button onClick={()=>this.handleClick(item.get('heading'))}>
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
                  <Content key={ind} isVisible={ item.get('heading') === this.state.selected }>
                    <Markdown source={item.get('text')} />
                  </Content>
                );
              })}
            </ContentArea>
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
