import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.scss';
// import logo, { ReactComponent as AriotLogo } from '../../assets/icons/ariot-icon.svg';

class Footer extends Component {

  render() {
    return (
      <header className="c_footer">       
        <div className="g_center">
          <div className="c_footer__content">
            <div className="c_footer__block c_footer__block--left">
              <h3>Contact us:</h3>
              <NavLink exact to={`/sign-up`} className="button button--box-link button--arrow button--light-text">Become our partner!</NavLink>
              <a href="mailto:signup@ariot.no" className="button button--box-link button--light-text" title="Send an e-mail to signup@ariot.no">Send us mail</a>
            </div>
            <div className="c_footer__block c_footer__block--right">
              <h3>Follow us:</h3>
              <ul className="c_footer__some-links">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Footer;