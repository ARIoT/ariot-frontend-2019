import React, { Component } from 'react';
import './Image.scss';

class Image extends Component {


  render() {
    
    return (
      <figure className={`c_image ${this.props.overlayQuote ? 'c_image__has-overlay' : ''}`}>
        <img src={this.props.imgUrl} alt={this.props.imgAlt} />
        {this.props.figcaption && (
          <figcaption className="c_image__figcaption">{this.props.figcaption}</figcaption>
        )}
        {this.props.overlayQuote && (
          <figcaption className="c_figre__figcaption">
            {this.props.overlayQuote}
            {this.props.quoteName && <span>{this.props.quoteName}</span>}
          </figcaption>
        )}
      </figure>
    );
  }
}

export default Image;