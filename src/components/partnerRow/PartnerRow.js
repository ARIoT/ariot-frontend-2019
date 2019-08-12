import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PartnerRow.scss';
// import Prototype from '../../data/prototype.json';
import Itera from '../../assets/images/logos/itera-logo.png';
import Inmeta from '../../assets/images/logos/inmeta-logo.png';

class PartnerRow extends Component {


  render() {

    return (
      <header className="c_partner-row">       
        <div className="g_center">
          <div className="c_partner-row__content">
            <ul className="c_partner-row__logos">
              <li>
                <Link to="http://itera.no" aria-label="Visit Itera.no">
                  <img src={Itera} alt="Itera logo" />
                  Itera
                </Link>
              </li>
              <li>
                <Link to="http://inemta.no" aria-label="Visit Inmeta.no">
                  <img src={Inmeta} alt="Inmeta logo" />
                  Inmeta
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default PartnerRow;