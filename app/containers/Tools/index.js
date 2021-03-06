/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Modal from 'react-modal';
import CloseIcon from 'assets/images/icons/clear.svg';

import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import { Link } from 'react-router';

import { ToolsButton, ToolsMenu,
         ToolsMenuItem, ToolsListContainer,
         ToolsListMenu, ToolsListMenuItem,
         ToolsList, ToolsListItem,
         ToolsContainer, ToolsViewport } from 'components/ToolsComponents';

import { NEWS_FEED, MY_TOOLS } from './constants';
 // SVGs
 import ArrowIcon from 'assets/images/icons/arrow.svg';
 import NewsFeedIcon from 'assets/images/icons/news-feed.svg';
 import MyToolsIcon from 'assets/images/icons/my-tools.svg';

import { ThemeProvider } from 'styled-components';

import ToolsArea from './ToolsArea';
import makeSelectTools, {makeSelectLanguage} from './selectors';
import messages from './messages';
import { setShowTools, setViewType, setMobileShowTools } from './actions';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';

const ToolsOpenerCloser = styled.div``;

const ToolsMenuContainer = styled.div`
  height: 100%;
`;

const CloseButton = styled.button`
border: solid 2px black;
position: absolute;
top: 10px;
left: 10px;
display: inline-block;
padding: 0;
line-height: 0;

`;

const ToolsViewType = styled(ToolsButton)`
  font-size: ${p=>p.ar?'13px':'14px'};
  line-height: ${p=>p.ar?'24px':'22px'};
  color: ${props=>props.chosen&&props.toShow ? 'black' : '#828486' };
  svg, svg * {
    fill: ${props=>props.chosen&&props.toShow ? 'black' : '#828486' };
  }
`;

const DesktopContent = styled.div`
  display: block;
  height: 100%;
  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    display: none;
  }
`;

const MobileContent = styled.div`
  display: none;
  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    display: block;
  }
`;

const MyToolsButton = styled(ToolsViewType)`
  ${props=> {

    if (props.firstTime !== undefined && props.firstTime) {

    return `
      &.animate {
        animation-play-state: running;
        animation-name: zoomTools;
        animation-duration: 1s;
      }
    `;
    } else {
        // return `animation-play-state: paused;`;
    }
  }}
`;

const ToolTitle = styled.span`
  color: black;
`;

const CloseSvg = styled(Isvg)`
  svg {
    width: 25px;
    height: 25px;
  }
`;
//For modalIsOpen
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(149, 149, 149, 0.75)',
    zIndex: 590
  },
  content : {
    position: 'absolute',
    right: 'auto',
    left: 'auto',
    top: '0px',
    bottom: 'auto',
    border: '0px none',
    background: 'rgb(255, 255, 255)',
    overflow: 'visible',
    outline: 'none',
    padding: '0px',
    width: '100%',
    textAlign: 'center',
    height: 'calc(100% - 70px) !important',
    zIndex: '1000'
  }
};

export class Tools extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      chosen: NEWS_FEED, //myTools
      isFirstTime: false,
      modalIsOpen: false
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  onToggleClick(chosen = null) {
    if (chosen !== null) {
      this.props.setShowTools(true);
    } else {
      this.props.setShowTools(!this.props.Tools.show);
    }

    if (this.props.Tools.show && chosen === this.props.Tools.viewType) {
      this.props.setShowTools(false);
    }

    if ( chosen !== null) {
      this.props.setViewType(chosen);
    }
  }

  onMobileClose() {

    this.props.handleSetMobileShowTools(false);
  }

  onMobileToggleClick(chosen = null) {
    if (chosen !== null) {
      this.props.handleSetMobileShowTools(true);
    } else {
      this.props.handleSetMobileShowTools(!this.props.Tools.mobileShow);
    }

    if (this.props.Tools.mobileShow && chosen === this.props.Tools.viewType) {
      this.props.handleSetMobileShowTools(false);
    }

    if ( chosen !== null) {
      this.props.setViewType(chosen);
    }
  }


  componentWillReceiveProps(nextProps) {
    //
    if(Object.keys(this.props.Tools.selectedTools).length === 0
        && Object.keys(nextProps.Tools.selectedTools).length === 1
    ) {
      this.setState({ isFirstTime: true });
    } else {
      this.setState({ isFirstTime: false });
    }
  }
  renderMobileContent() {
    const {locale} = this.props.intl;
    return (
      <LanguageThemeProvider>
        <ToolsMenu>
          <ToolsMenuItem>
            <ToolsViewType
              ar={locale==='ar'}
              onClick={() => {
                  this.onMobileToggleClick(NEWS_FEED);
                  this.openModal();
              }}
              chosen={this.props.Tools.viewType === NEWS_FEED}
              toShow={this.props.Tools.mobileShow}
              >
              <Isvg src={NewsFeedIcon} />
              <ToolTitle>
                <TranslatableStaticText {...staticText.newsFeed} />
              </ToolTitle>
            </ToolsViewType>
          </ToolsMenuItem>
          <ToolsMenuItem>
            <MyToolsButton
                ar={locale==='ar'}
                onClick={() => {
                  this.onMobileToggleClick(MY_TOOLS);
                  this.openModal();
                }}
                chosen={this.props.Tools.viewType === MY_TOOLS}
                toShow={this.props.Tools.mobileShow || this.props.Tools.onboardShow}
                firstTime={this.props.Tools.onboardShow}
                className={this.props.Tools.onboardShow ? 'animate' : ''}
            >
              <Isvg src={MyToolsIcon} />
              <ToolTitle>
                <TranslatableStaticText {...staticText.myTools} />
              </ToolTitle>
            </MyToolsButton>
          </ToolsMenuItem>
        </ToolsMenu>
        <Modal
          isOpen={this.props.Tools.mobileShow}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{...customStyles, content: {...customStyles.content}}}
          contentLabel="ToolsModal"
          overlayClassName="ToolModalOverlay"
        >
          <ToolsArea lang={this.props.language} show={this.props.Tools.mobileShow || this.props.Tools.onboardShow}/>
          <CloseButton onClick={this.onMobileClose.bind(this)}>
            <CloseSvg src={CloseIcon} />
          </CloseButton>
        </Modal>
      </LanguageThemeProvider>
    )
  }

  renderDesktopContent() {
    const {locale} = this.props.intl;


    return (
      <ToolsViewport>
        <LanguageThemeProvider>
            <ToolsMenu>
              <ToolsMenuItem  marginBottom={'57px'}>
                <ToolsButton
                  onClick={() => this.onToggleClick(null)}
                  rotate={true}
                  toShow={this.props.Tools.show || this.props.Tools.onboardShow}
                  lang={this.props.language}
                >
                  <Isvg src={ArrowIcon} />
                </ToolsButton>
              </ToolsMenuItem>
              <ToolsMenuItem  marginBottom={'42px'}>
                <ToolsViewType
                  ar={locale==='ar'}
                  onClick={() => this.onToggleClick(NEWS_FEED)}
                  chosen={this.props.Tools.viewType === NEWS_FEED}
                  toShow={this.props.Tools.show}
                  >
                  <Isvg src={NewsFeedIcon} />
                  <ToolTitle>
                    <TranslatableStaticText {...staticText.newsFeed} />
                  </ToolTitle>
                </ToolsViewType>
              </ToolsMenuItem>
              <ToolsMenuItem>
                <MyToolsButton
                    ar={locale==='ar'}
                    onClick={() => this.onToggleClick(MY_TOOLS)}
                    chosen={this.props.Tools.viewType === MY_TOOLS}
                    toShow={this.props.Tools.show || this.props.Tools.onboardShow}
                    firstTime={this.props.Tools.onboardShow}
                    className={this.props.Tools.onboardShow ? 'animate' : ''}
                >
                  <Isvg src={MyToolsIcon} />
                  <ToolTitle>
                    <TranslatableStaticText {...staticText.myTools} />
                  </ToolTitle>
                </MyToolsButton>
              </ToolsMenuItem>
            </ToolsMenu>
          <ToolsArea lang={this.props.language} show={this.props.Tools.show || this.props.Tools.onboardShow}/>
        </LanguageThemeProvider>
      </ToolsViewport>
    );
  }

  render() {
    const {locale} = this.props.intl;

    return (
      <ToolsContainer lang={locale} showTools={this.props.Tools.show || this.props.Tools.onboardShow }>
        <MobileContent>
         {this.renderMobileContent()}
        </MobileContent>
        <DesktopContent>
          {this.renderDesktopContent()}
        </DesktopContent>
      </ToolsContainer>
    );
  }
}

Tools.propTypes = {
  show: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
  language: makeSelectLanguage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setShowTools: (toShow) => {

      dispatch(setShowTools(toShow));
    },
    setViewType: (viewType) => {
      dispatch(setViewType(viewType));
    },
    handleSetMobileShowTools: (show) => {
      dispatch(setMobileShowTools(show));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Tools));
