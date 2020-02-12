import React, { Component } from 'react';
import './People.scss';

class People extends Component {

  render() {
    const {
      name,
      title,
      image,
      lookingFor,
      bio,
      type
  } = this.props.item;
    
    return (
      <div className={`c_people c_people--${type}`}>        
        <ul>
          {bio.map((item, index) => 
          (
            <li key={`programItem-${index}`}>
              {item.value}
            </li>
          ))}  
        </ul>
      </div>
    );
  }
}

export default People;