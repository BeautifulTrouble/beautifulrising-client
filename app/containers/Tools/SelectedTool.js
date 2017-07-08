/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectTools from './selectors';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import messages from './messages';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import ShareButton from 'components/ShareButton';
import RemoveSmallIcon from 'assets/images/icons/remove-small.svg';
import ShareSmallIcon from 'assets/images/icons/share-small.svg';
import MethodologyFlag from 'assets/images/type/methodology-small.svg';
import PrincipleFlag from 'assets/images/type/principle-small.svg';
import TacticFlag from 'assets/images/type/tactic-small.svg';
import TheoryFlag from 'assets/images/type/theory-small.svg';
import StoryFlag from 'assets/images/type/story-small.svg';

import { Link } from 'react-router';

import { SelectedToolItem, SelectedToolTitle,
          SelectedToolSnapshot, SelectedToolCommands, SelectedToolCommandItem } from 'components/SelectedToolComponents';
import AdderRemover from './AdderRemover';

const SelectedToolCommandContent = styled(ContentBlock)`
  display: inline;
`;
const GrayShareIcon = styled(Isvg)`
  svg, svg * {
    fill: #959595 !important;
  }
`;
export class SelectedTool extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getFlag() {
    switch(this.props.type) {
      case 'methodology': return MethodologyFlag;
      case 'principle': return PrincipleFlag;
      case 'tactic': return TacticFlag;
      case 'theory': return TheoryFlag;
      case 'story': return StoryFlag;
    }
  }

  render() {
    const flag = this.getFlag();
    const tool = this.props.allData.get(this.props.slug);
    const lang = this.props.intl.locale;
    if (!tool) return null;
    return (
      <LanguageThemeProvider>
        <SelectedToolItem lang={lang}>
          <SelectedToolTitle flag={flag} lang={lang}>
            <Link to={`/tool/${tool.get('slug')}`}>{tool.get('title')}</Link>
          </SelectedToolTitle>
          <SelectedToolSnapshot>
            <ContentBlock>
              {tool.get('snapshot')}
            </ContentBlock>
          </SelectedToolSnapshot>
          <SelectedToolCommands lang={lang}>
            <SelectedToolCommandItem  lang={lang}>
              <AdderRemover {...this.props}>
                <Isvg src={RemoveSmallIcon} />
                <SelectedToolCommandContent>
                  <FormattedMessage {...messages.remove} />
                </SelectedToolCommandContent>
              </AdderRemover>
            </SelectedToolCommandItem>
            <SelectedToolCommandItem  lang={lang}>
              <ShareButton {...this.props}>
                <SelectedToolCommandContent>
                  <FormattedMessage {...messages.share} />
                </SelectedToolCommandContent>
              </ShareButton>
            </SelectedToolCommandItem>
          </SelectedToolCommands>
        </SelectedToolItem>
      </LanguageThemeProvider>
    );
  }
}

SelectedTool.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  snapshot: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
  allData: makeSelectAllToolsWithSlugIndex()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SelectedTool));
