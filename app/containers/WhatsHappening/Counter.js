import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import makeSelectWhatsHappening from './selectors';
import BellIcon from 'assets/images/icons/bell.svg';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

const CounterArea = styled.div`
  color: white;
  text-align: center;
  width: 20px;
  font-size: 12px;
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

class Counter extends React.PureComponent {

  constructor(props) {
    super();
  }

  render() {


    const { data, lastViewed } = this.props.WhatsHappening;
    const { locale } = this.props.intl;
    if (!data || data === undefined) return null;

    const unseenCount = data.filter(item=> {
          const dateTime = new Date(item.date);
          return dateTime > lastViewed;
      });


    // if (unseenCount.length == 0) return null;

    return (
      <CounterArea><span>{unseenCount.length}</span></CounterArea>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Counter));
