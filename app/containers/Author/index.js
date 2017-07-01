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
        AuthorImage, AuthorName, AuthorDesc} from 'components/AuthorComponents';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {selectAuthor} from './selectors';

export class Author extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    let name = this.props.author.title.split(' ');
    const firstName = name.shift();
    const latterName = name.join(' ');
    return (
      <LanguageThemeProvider>
        <AuthorContainer>
            <AuthorLink to={`/search/authors!${this.props.slug}`}>
              <AuthorImage image={this.props.author.image} />
            </AuthorLink>
          <AuthorName>
            <AuthorLink to={`/search/authors!${this.props.slug}`}>{firstName}</AuthorLink>
            <AuthorLink to={`/search/authors!${this.props.slug}`}>{latterName}</AuthorLink>
          </AuthorName>
          <AuthorDesc>
            <ContentBlock>
              <Markdown source={this.props.author.bio} />
            </ContentBlock>
          </AuthorDesc>
        </AuthorContainer>
      </LanguageThemeProvider>
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
