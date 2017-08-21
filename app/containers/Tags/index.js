/*
 *
 * Tags
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Isvg from 'react-inlinesvg';
import { makeSelectAllTags } from 'containers/App/selectors';
import { push } from 'react-router-redux';

import ClearIcon from 'assets/images/icons/clear.svg';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import MenuBlock from 'components/MenuBlock';
import MenuTitle from 'components/MenuTitle';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import Link from 'components/Link';

import {slugify} from 'utils/tags'

import TagBlock from 'components/Tags/TagBlock';
import TagList from 'components/Tags/TagList';
import TagListItem from 'components/Tags/TagListItem';
import TagLink from 'components/Tags/TagLink';
import TagDivider from 'components/Tags/TagDivider';
import ClearButtonContainer from 'components/Tags/ClearButtonContainer';

import makeSelectTags from './selectors';
import messages from './messages';
import staticText from './staticText';


export class Tags extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleClearTags() {
    this.props.dispatch(push('/'));
  }

  renderClearButton() {
    const selected = this.props.params ? this.props.params.label : '';
    if (!selected || selected === undefined) return null;

    return (
      <ClearButtonContainer>
        <button onClick={this.handleClearTags.bind(this)}>
          <Isvg src={ClearIcon} />
        </button>
      </ClearButtonContainer>
    );

  }
  render() {
    const selected = this.props.params ? this.props.params.label : '';
    const { locale } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <TagBlock align={this.props.align}>
          <TagList>
            {this.props.tags.map((item) => (
              <TagListItem ar={locale==='ar'} key={item.key} selected={item.key===selected}>
                <TagLink to={`/tag/${item.key}`}>{item.value}</TagLink>
                <TagDivider />
              </TagListItem>
            ))}
          </TagList>
          { this.props.showClear ? this.renderClearButton() : null }
        </TagBlock>
      </LanguageThemeProvider>
    );
  }
}

Tags.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // tags: PropTypes.array.isRequired
  //   tags: PropTypes.array.isRequired,
  // },
};

const mapStateToProps = (state, props) => {
  return {
    tags: makeSelectAllTags(state, props)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(Tags);
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Tags));
