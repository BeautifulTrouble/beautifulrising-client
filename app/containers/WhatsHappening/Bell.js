import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';
import makeSelectWhatsHappening from './selectors';
import BellIcon from 'assets/images/icons/bell.svg';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

const Counter = styled.div`
  color: white;
  text-align: center;
  width: 20px;
  font-size: 12px;
  border-right: 50%
  position: relative;

  span {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: 800;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 50;
    width: 100%;
    padding-bottom: 100%;
    background: black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

`;
const CounterContainer = styled.div`
  position: absolute
  top: 20px;
  left: 6px;
`;
const BellContainer = styled.div`
  position: absolute;
  right: 0;
  top: 27px;
`;
const Viewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
class Bell extends React.PureComponent {

  constructor(props) {
    super();
  }

  renderCounter() {


    const { data, lastViewed } = this.props.WhatsHappening;

    if (!data || data === undefined) return null;

    const unseenCount = data.filter(item=> {
          const dateTime = new Date(item.date);
          return dateTime > lastViewed;
      });

    console.log(unseenCount, data);
    if (unseenCount.length == 0) return null;

    return (
      <CounterContainer>
        <Counter><span>{unseenCount.length}</span></Counter>
      </CounterContainer>
    )
  }
  render() {
    const counter = this.renderCounter();
    return(
      <BellContainer>
        <Viewport>
          <Link to='/whats-happening'>
            <Isvg src={BellIcon} />
            { counter }
          </Link>
        </Viewport>
      </BellContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  WhatsHappening: makeSelectWhatsHappening(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bell);
