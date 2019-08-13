import React, { Component } from 'react'
import './Header.scss';
import { ReactComponent as AriotLogo } from '../../assets/icons/ariot-icon.svg';

class Header extends Component {

  render() {
    const {
      pageTitle,
      theme,
      type
    } = this.props;

    return (
      <header className={`c_header  ${theme ? 'c_header--' + theme : ''}`}>
        <div className="c_mobile-top-header">
          <span className="c_mobile-top-header__page-title">{pageTitle}</span>
        </div>
        <div className="g_center">
          <div className="c_header__content">
            <h1>{pageTitle}</h1>
            { type==="logo" ? (
              <div className="c_header__logo">
                <AriotLogo />
              </div>
            ) : (
              <div className="c_header__date-note">
                <span className="date">12-15th</span>
                <span className="month">March 2020</span>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;