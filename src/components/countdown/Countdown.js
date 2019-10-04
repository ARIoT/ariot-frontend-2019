import React, { Component } from 'react'
import './BigHeader.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../nav/Nav';

class Countdown extends Component {

  render() {
    const {
      pageTitle
    } = this.props;

    return (
      <header className="c_countdown">
       <div className="g_center">
        <div className="c_countdown__content">
          <NavLink className="button button--box-link" to="/sign-up" >Sign up!</NavLink>
        </div>
       </div>
        
      </header>
    );
  }
}

export default Countdown;