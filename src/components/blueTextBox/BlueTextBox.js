import React, { Component } from 'react';
import Link from 'react-router-dom';
import './BlueTextBox.scss';

class BlueTextBox extends Component {

  render() {

    return (
      <div className="c_blue-text-box">
        <span className="c_blue-text-box__label">
          {this.props.item.label}
        </span>
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.text}</p>
        {/* <Link to={this.props.item></Link> */}
      </div>

    );
  }
}

export default BlueTextBox;