import React, { Component } from 'react';
// import Link from 'react-router';
import { Link } from 'react-router-dom';
import './BlueTextBox.scss';

class BlueTextBox extends Component {

  render() {

    const {
      item
    } = this.props;

    return (
      <div className="c_blue-text-box">
        <span className="c_blue-text-box__label">
          {item.label}
        </span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        {item.url ? (
          <Link to={item.url}>
            {item.urlText}
          </Link>
        ) : undefined}
        
      </div>

    );
  }
}

export default BlueTextBox;