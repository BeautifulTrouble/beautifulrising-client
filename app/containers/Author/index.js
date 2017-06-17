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
import {selectAuthor} from './selectors';

export class Author extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AuthorContainer>
          <AuthorLink to={`/search/authors!${this.props.slug}`}>
            <AuthorImage image={this.props.author.image} />
          </AuthorLink>
        <AuthorName>
          <AuthorLink to={`/search/authors!${this.props.slug}`}>{this.props.author.title}</AuthorLink>
        </AuthorName>
        <AuthorDesc>
          <Markdown source={this.props.author.bio} />
        </AuthorDesc>
      </AuthorContainer>
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
