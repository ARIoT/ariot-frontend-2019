import React, { Component } from 'react';
import './LastYearWrapper.scss';

class LastYearWrapper extends Component {

  render() {
    return (
      <div className="c_last-year-wrapper">       
        <div className="g_center">
            <h2>JEG ER EN LAST YEAR WRAPPER {this.props.year}</h2>
            {this.props.yearItem['topBoxes'].map((item, index) => (
                <span key={`topBox-${index}`}>Hei</span>
            ))}
        </div>
      </div>
    );
  }
}

export default LastYearWrapper;