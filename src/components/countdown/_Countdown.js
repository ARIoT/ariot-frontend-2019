import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import './Countdown.scss';

class Countdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
    }
  }
  
  componentDidMount() {
    
    
  }

  render() {

    // console.log(this.now);
    // const then = moment(thenDate, timeFormat);
    // const now = moment();
    // const countdown = moment(then - now);

    const { days, hours, minutes } = this.state;
    const today = moment();
    return (
      <div className="c_countdown">
      
        <h2>Sign up deadline in:{this.today}</h2>
        <div className="c_countdown__numbers">
          <div className="c_countdown__numbers__days">
            <span className="c_countdown__number__time">{this.state.days}</span>
            <span className="u_hidden-desktop c_countdown c_countdown__number__value">d</span><span className="u_hidden-mobile c_countdown__number__value">days</span>
          </div>
          <div className="c_countdown__numbers__hours">
            <span className="c_countdown__number__time">{hours}</span>
            <span className="u_hidden-desktop c_countdown__number__value">h</span><span className="u_hidden-mobile c_countdown__number__value">hours</span>
          </div>
          <div className="c_countdown__numbers__days">
            <span className="c_countdown__number__time">{minutes}</span>
            <span className="u_hidden-desktop c_countdown__number__value">m</span><span className="u_hidden-mobile c_countdown__number__value">minutes</span>
          </div>
        </div>
        
      </div>
    );
  }
}

// Countdown.propTypes = {
//   date: PropTypes.string.isRequired
// };

// Countdown.defaultProps = {
//   date: new Date()
// };

export default Countdown;