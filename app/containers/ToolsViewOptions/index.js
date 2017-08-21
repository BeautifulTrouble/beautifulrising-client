/*
 *
 * ToolsViewOptions
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl} from 'react-intl';
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
  display: inline-block;
`;
// import { makeSelectToolView } from './selectors';
const ViewOption = styled(IconButton)`
  margin-${p=>p.isArabic?'right':'left'}: ${p=>p.last?'24px':'0'};
`
export class ToolsViewOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { locale } = this.props.intl;
    return (
      <Container>
        <ViewOption isArabic={locale==='ar'} width="auto" onClick={this.props.clickBlockView}>
          <SvgButton selected={this.props.isBlockView} src={BlockIcon}/>
        </ViewOption>
        <ViewOption isArabic={locale==='ar'} last={true} width="auto" onClick={this.props.clickListView}>
          <SvgButton selected={this.props.isListView} src={ListIcon}/>
        </ViewOption>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ToolsViewOptions));
