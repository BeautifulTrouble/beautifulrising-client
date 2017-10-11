import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import makeSelectWhatsHappening from './selectors';
import BellIcon from 'assets/images/icons/bell.svg';
import Counter from './Counter';

const CounterContainer = styled.div`
  position: absolute
  top: 5px;
  ${p=>p.lang==='ar'?'right':'left'}: 7px;

`;
const BellContainer = styled.div`
  display: inline-block;
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

  render() {
    const { locale } = this.props.intl;
    return(
      <BellContainer isArabic={locale==='ar'}>
        <Viewport>
          <Link to='/whats-happening'>
            <Isvg src={BellIcon} />
            <CounterContainer lang={locale}>
              <Counter />
            </CounterContainer>
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


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Bell));
