import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { ReactComponent as FacebookIcon} from '../../assets/icons/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-icon.svg';
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
                <li>
                  <a
                    href="https://instagram.com/ArcticIoTChallenge" 
                    target="_blank" 
                    title="Visit our Instagram page"
                    rel="noopener noreferrer">
                    <span>Instagram</span>
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/ArcticIoTChallenge" 
                    target="_blank" 
                    title="Visit our Facebook page"
                    rel="noopener noreferrer">
                    <span>Facebook</span>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/ArcticIoT" 
                    target="_blank" 
                    title="Visit our Twitter page"
                    rel="noopener noreferrer">
                    <span>Twitter</span>                    
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
              <h4>Ariot <span>Arctic IoT Challenge 2020</span></h4>   
            </div>  
          </div>
        </div>
      </header>
    );
  }
}

export default Footer;