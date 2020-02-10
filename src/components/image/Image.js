import React, { Component } from 'react';
import './Image.scss';

class Image extends Component {


  render() {
    
    return (
      <figure className="c_image">
        <img src={this.props.imgUrl} alt={this.props.imgAlt} />
        {this.props.figcaption && (
          <figcaption>{this.props.figcaption}</figcaption>
        )}
      </figure>
    );
  }
}

export default Image;