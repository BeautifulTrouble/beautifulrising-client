import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import { ContentContainer, ShowContentButton } from 'components/ToolPage/Main';
import ShortContent from './ShortContent';
import FullContent from './FullContent';

import { PROP_FULL_WRITE_UP, PROP_SHORT_WRITE_UP } from '../constants';

import makeSelectToolPage from '../selectors';
import {setExpandAll} from '../actions';

import staticText from '../staticText';

class MainContent extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  }

  generateContent(){
    if (this.props.ToolPage.expandAll) {
      return (<FullContent {...this.props} />);
    } else {
      return (<ShortContent {...this.props} />)
    }
  }

  handleShowClick() {
    this.props.handleMoreLessClick(!this.props.ToolPage.expandAll);
  }

  render() {

    // IF long writeup is translated
    if( this.props.showIfUntranslated(PROP_FULL_WRITE_UP)
          && this.props['full-write-up'] ) {

      const mainContent = this.generateContent();
      const buttonText = this.props.ToolPage.expandAll
          ? (<TranslatableStaticText {...staticText.less}/>)
          : (<TranslatableStaticText {...staticText.more}/>);

      return (
        <ContentContainer>
          {mainContent}
          <ContentBlock>
            <ShowContentButton onClick={this.handleShowClick.bind(this)}>
              {buttonText}
            </ShowContentButton>
          </ContentBlock>
        </ContentContainer>
      );
    }

    // IF Short writeup is also not translated
    if (
      !this.props.showIfUntranslated(PROP_SHORT_WRITE_UP)
    ) { return null; }

    // IF short writeup is translated
    return (
      <ShortContent {...this.props} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  ToolPage: makeSelectToolPage()
});

function mapDispatchToProps(dispatch) {
  return {
    handleMoreLessClick: (isExpandAll) => {
      dispatch(setExpandAll(isExpandAll));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
