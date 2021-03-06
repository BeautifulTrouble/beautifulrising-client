/*
 *
 * Author
 *
 */

import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {AuthorContainer, AuthorImageArea, AuthorLink,
        AuthorImage, AuthorName, AuthorDesc} from 'components/Author';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import LatinThemeProvider from 'components/LatinThemeProvider';
import {selectAuthor} from './selectors';

import AnonPhoto from 'assets/images/icons/anon.png';

const AUTHOR_BASE_IMAGE = "https://beautifulrising.org/assets/content/small-";
export class Author extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    let name = this.props.author.title.split(' ');
    const firstName = name.shift();
    const latterName = name.join(' ');

    const isLatin = this.props.author['lang-missing'].includes('bio') ;

    const ThemeProvider = isLatin ? LatinThemeProvider : LanguageThemeProvider;

    return (
      <ThemeProvider>
        <AuthorContainer>
          <AuthorLink to={`/search/authors!${this.props.slug}`}>
            <AuthorImage image={this.props.author.image ? AUTHOR_BASE_IMAGE + this.props.author.image : AnonPhoto } />
          </AuthorLink>
          {/*<AuthorName>
            <AuthorLink to={`/search/authors!${this.props.slug}`}>{firstName}</AuthorLink>
            <AuthorLink to={`/search/authors!${this.props.slug}`}>{latterName}</AuthorLink>
          </AuthorName> */}
          <AuthorDesc>
            <ContentBlock>
              <Markdown source={this.props.author.bio || `**${this.props.author.title}**`} />
            </ContentBlock>
          </AuthorDesc>
        </AuthorContainer>
      </ThemeProvider>
    );
  }
}

Author.propTypes = {
  dispatch: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    author: selectAuthor(state, props)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);
