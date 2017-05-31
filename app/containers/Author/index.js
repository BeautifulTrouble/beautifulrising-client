/*
 *
 * Author
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {AuthorContainer, AuthorImageArea, AuthorLink,
        AuthorImage, AuthorName, AuthorDesc} from 'components/AuthorComponents';
import {selectAuthor} from './selectors';

export class Author extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.author);
    return (
      <AuthorContainer>
        <AuthorImageArea>
          <AuthorLink to={`/search/authors!${this.props.slug}`}>
            <AuthorImage image={this.props.author.image} />
          </AuthorLink>
        </AuthorImageArea>
        <AuthorName>
          <AuthorLink to={`/search/authors!${this.props.slug}`}>{this.props.author.title}</AuthorLink>
        </AuthorName>
        <AuthorDesc>{this.props.author.bio}</AuthorDesc>
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
