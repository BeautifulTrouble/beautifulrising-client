import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';

import ContentBlock from 'components/ContentBlock';
import { ContentContainer, ShowContentButton } from 'components/ToolPage/Main';
import ShortContent from './ShortContent';
import FullContent from './FullContent';

import { PROP_FULL_WRITE_UP, PROP_SHORT_WRITE_UP } from '../constants';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

class MainContent extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showFull: false
    }
  }

  componentWillReceiveProps(nextProps) {
    //Refresh if label is different
    if (nextProps.params.label !== this.props.params.label) {
      this.setState({ showFull: false });
    }
  }

  generateContent(){
    if (this.state.showFull) {
      return (<FullContent {...this.props} />);
    } else {
      return (<ShortContent {...this.props} />)
    }
  }

  handleShowClick() {
    this.setState({ showFull : !this.state.showFull })
  }

  render() {

    // IF long writeup is translated
    if( this.props.showIfUntranslated(PROP_FULL_WRITE_UP)
          && this.props['full-write-up'] ) {

      const mainContent = this.generateContent();
      const buttonText = this.state.showFull
          ? (<TranslatableStaticText {...staticText.showLess}/>)
          : (<TranslatableStaticText {...staticText.showMore}/>);

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

export default MainContent;
