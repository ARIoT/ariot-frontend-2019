import React, { Component, Fragment } from 'react';
import './Day.scss';
// import SiteData from '../../data/site.json';

class Day extends Component {

  constructor() {
      super();
  }


  render() {
    const {
      day,
      stops,
      date,
      text
  } = this.props.item;
    
    return (
      <div className="c_day">
        <h3>
          <span className="c_day__date">{date}</span>
          <span className="c_day__day">{day}</span>
        </h3>
        {text && (
          <p>{text}</p>
        )}
        <div className="c_day__program">
          <ul>
            {stops.map((item, index) => 
            (
              <li key={`programItem-${index}`}>
                {item.type && (
                  <span className="program-item__type" />
                )}
                <span className="program-item__time">
                  {item.time}
                </span>
                <span className="program-item__activity">
                  {item.activity}
                </span>
              </li>
            ))}  
          </ul>          
        </div>
      </div>
    );
  }
}

export default Day;