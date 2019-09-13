import React, { Component, Fragment } from 'react';
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
          {item.title && <h3>{item.title}</h3>}
          {item.text && (
            <p>{item.text}</p>
          )}

          {item.url && (
            <Link to={item.url}>
              {item.urlText}
            </Link>
          )}


          {item.listHeader && <h3>{item.listHeader}</h3>}

          {item.list && (
            <ul className="u_mega-bullet-list">
            {item.list.map(item => (
            <li>
              {item.title && <h4 className="list-item-title">{item.title}</h4>}
              {item.text && <p>{item.text}</p>}
            </li> 
            ))}
            </ul>
          )}

          {item.listHeader2 && <h3>{item.listHeader2}</h3>}

          {item.list2 && (
            <ul className="u_mega-bullet-list">
            {item.list2.map(item => (
            <li>
              {item.title && <h4 className="list-item-title">{item.title}</h4>}
              {item.text && <p>{item.text}</p>}
            </li> 
            ))}
            </ul>
          )}
          {item.importantNote && <div className="c_label-text-box__important-note">
            <span>{item.importantNote}</span>
          </div>}
        </div>
        
    );
  }
}

export default LabelTextBox;