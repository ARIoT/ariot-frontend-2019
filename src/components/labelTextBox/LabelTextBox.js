import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LabelTextBox.scss';

class LabelTextBox extends Component {

  render() {

    const {
      item
    } = this.props;

    return (
      <div className={`c_label-text-box  ${item.extraClass ? 'c_label-text-box--' + item.extraClass : ''}`}>
        <span className="c_label-text-box__label">
          {item.label}
        </span>
        <h3>{item.title}</h3>
        {item.text ? (
          <p>{item.text}</p>
        ) : undefined}

        {item.url ? (
          <Link to={item.url}>
            {item.urlText}
          </Link>
        ) : undefined}
        
      </div>

    );
  }
}

export default LabelTextBox;