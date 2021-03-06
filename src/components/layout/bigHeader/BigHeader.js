import React, { Component } from 'react'
import './BigHeader.scss';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/blue-logo.png';

class BigHeader extends Component {

  render() {
    const {
      pageTitle
    } = this.props;

    return (
      <header className="c_big-header">
        <div className="c_mobile-top-header">
          <span className="c_mobile-top-header__page-title">{pageTitle}</span>
        </div>
       <div className="g_center">
        <div className="c_big-header__content">
          <Link to="/" className="c_big-header__logo" aria-label="Go to the startpage" title="Go to the startpage">
            <img src={Logo} alt="Ariot logo" />
          </Link>
          <h1 className="c_big-header__title">
            <span className="anniversary">
              <span className="anniversary__year">5</span>
              <span className="anniversary__th">th</span>
            </span>
            <span className="ariot-name">
              <span className="ariot-name__ariot">ARIoT</span>
              <span className="ariot-name__slogan">Arctic IoT Challenge</span>
            </span>
          </h1>
          <div className="c_big-header__date-note">
            <span className="date">12-15th</span>
            <span className="month">March 2020</span>
          </div>
        </div>
       </div>
        
      </header>
    );
  }
}

export default BigHeader;