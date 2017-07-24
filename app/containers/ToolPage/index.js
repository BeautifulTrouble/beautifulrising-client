/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import AdderRemover from 'containers/Tools/AdderRemover';
import { ToolInformation, ToolHeader } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import { loadData } from '../App/actions';

import { ThemeProvider } from 'styled-components';
import makeSelectToolPage, { makeSelectTool } from './selectors';
import messages from './messages';
import ToolPageHeader from './ToolPageHeader';
import ToolPageLeft from './ToolPageLeft';
import ToolPageMain from './ToolPageMain';
import ToolPageRight from './ToolPageRight';
import {BR_IMAGE_PREFIX} from 'containers/Tools/constants';
import { MODULE_TYPE_UNTRANSLATED } from 'components/CommonComponents/constants';

export class ToolPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showUntranslated: false
    };
  }
  componentDidMount() {
    if (!this.props.toolData.getIn(['tool']).document_id) {
      this.props.onPageLoad();
    }
  }

  showUntranslatedText() {
    this.setState({ showUntranslated: true });
  }

  showIfUntranslated(attr) {
    const tool = this.props.toolData.getIn(['tool']);

    if ( tool['module-type-effective'] !== MODULE_TYPE_UNTRANSLATED ) {
       return true
    }

    return this.state.showUntranslated && tool['lang-missing'].includes(attr);
  }

  render() {
    const tool = this.props.toolData.getIn(['tool']);
    const lang = this.props.intl.locale;
    if (!tool.document_id) return null;

    return (
      <ThemeProvider theme={{ lang }}>
        <div>
          <Helmet
            title={'BeautifulRising: ' + tool.title}
            meta={[
              { name: 'description', content: 'Description of ToolPage' },
              { property: 'og:url', content: `http://beta.beautifulrising.org/tool/${tool.slug}`},
              { property: 'og:type', content: 'article' },
              { property: 'og:title', content: tool.title },
              { property: 'og:description', content: tool.snapshot },
              { property: 'og:image', content: BR_IMAGE_PREFIX+tool.image }
            ]}
          />
          <ToolHeader>
            <ToolPageHeader {...tool}
                showIfUntranslated={this.showIfUntranslated.bind(this)}
                key={'header'}/>
          </ToolHeader>
          <ToolInformation>
            <ToolPageLeft {...tool}
                showIfUntranslated={this.showIfUntranslated.bind(this)}
                key={'page-left'}/>
            <ToolPageMain {...tool}
                showIfUntranslated={this.showIfUntranslated.bind(this)}
                params={this.props.params} key={'page-main'}/>
            <ToolPageRight {...tool}
                showIfUntranslated={this.showIfUntranslated.bind(this)}
                key={'page-right'}/>
          </ToolInformation>
        </div>
      </ThemeProvider>
    );
  }
}

// <h3>{tool.type}</h3>
// <p>{tool['short-write-up']}</p>
// <h3>{this.props.toolData.getIn(['authors']).map(item => item.title)}</h3>

ToolPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    toolData: makeSelectTool(state, props)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ToolPage));
