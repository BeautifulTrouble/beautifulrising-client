/*
 *
 * ImageSlideshow
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const IMAGE_CONTAINER={
  width: '100%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center center',
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'opacity 0.4s ease'
};

const BUTTON = {
  top: '50%',
  position: 'absolute',
  transform: 'translate(0, -50%)',
  cursor: 'pointer'
}
const PREVIOUS_BUTTON = {
  left: 0,
  ...BUTTON
};

const NEXT_BUTTON = {
  right: 0,
  ...BUTTON
};

export class ImageSlideshow extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      chosen: 0
    }
  }

  renderImages() {
    if (!this.props.images) return null;

    return this.props.images.map((image, index)=>(
      <div key={image + '-' + index} style={{
        ...IMAGE_CONTAINER,
        backgroundImage: `url(${image})`,
        opacity: this.state.chosen == index ? 1 : 0
      }}>
      </div>
    ));
  }

  onPrevious() {
    if (this.state.chosen > 0) {
      this.setState({ chosen: this.state.chosen - 1 });
    }
  }

  onNext() {
    if (this.state.chosen < this.props.images.length - 1) {
      this.setState({ chosen: this.state.chosen + 1 });
    }
  }

  renderNextButton() {
    if (this.state.chosen == this.props.images.length - 1) return null;
    return this.props.nextButton || this.renderDefaultNextButton();
  }

  renderDefaultNextButton() {
    return (<div>NEXT</div>);
  }


  renderPreviousButton() {
    if (this.state.chosen == 0) return null;
    return this.props.previousButton || this.renderDefaultPreviousButton();
  }
  
  renderDefaultPreviousButton() {
    return (<div>PREVIOUS</div>);
  }

  render() {
    return (
      <div className={'img-slideshow-container'}
          style={{
            position: 'relative',
            width: this.props.width || '100%',
            height: this.props.height || '100%'
          }}>
          {this.renderImages()}
          <div
              className={'previous-button'}
              onClick={this.onPrevious.bind(this)}
              style={{ ...PREVIOUS_BUTTON, ...this.props.previousButtonStyle }}
          >
            { this.renderPreviousButton() }
          </div>
          <div
              className={'next-button'}
              onClick={this.onNext.bind(this)}
              style={{ ...NEXT_BUTTON, ...this.props.nextButtonStyle }}
          >
            { this.renderNextButton() }
          </div>
      </div>
    );
  }
}

ImageSlideshow.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ImageSlideshow);
