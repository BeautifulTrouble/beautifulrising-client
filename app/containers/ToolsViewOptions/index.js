/*
 *
 * ToolsViewOptions
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectToolView, { isListView, isBlockView } from './selectors';
import styled from 'styled-components';

//Icons
import BlockIcon from 'assets/images/icons/view_block.svg';
import ListIcon from 'assets/images/icons/view_list.svg';

import {SvgButton} from 'components/CommonComponents';

import IconButton from 'components/IconButton';

import { LIST_VIEW, BLOCK_VIEW } from './constants'
import { changeToolView } from './actions';

const Container = styled.div`
  width: 94px;
  display: inline-block;
`;
// import { makeSelectToolView } from './selectors';

export class ToolsViewOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Container>
        <IconButton width="49%" onClick={this.props.clickBlockView}>
          <SvgButton selected={this.props.isBlockView} src={BlockIcon}/>
        </IconButton>
        <IconButton width="49%" onClick={this.props.clickListView}>
          <SvgButton selected={this.props.isListView} src={ListIcon}/>
        </IconButton>
      </Container>
    );
  }
}

ToolsViewOptions.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ToolView: makeSelectToolView(),
  isListView: isListView(),
  isBlockView: isBlockView()
});

function mapDispatchToProps(dispatch) {
  return {
    clickListView: (evt) => {
      dispatch(changeToolView(LIST_VIEW));
    },
    clickBlockView: (evt) => {
      dispatch(changeToolView(BLOCK_VIEW));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsViewOptions);
