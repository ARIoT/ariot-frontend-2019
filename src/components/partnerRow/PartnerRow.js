import React, { Component } from 'react';
import './PartnerRow.scss';
import SiteData from '../../data/site.json';
import Itera from '../../assets/images/logos/itera-logo.png';
import Inmeta from '../../assets/images/logos/inmeta-logo.png';

class PartnerRow extends Component {

  constructor() {
    super();
    this.getIcon = this.getIcon.bind(this);
}

  getIcon(logo) {
    switch (logo) {
    case 'itera-partner':
        return Itera;
    case 'inmeta-partner':
        return Inmeta;
    default:
        return null;
    }
}

  render() {

    return (
      <header className="c_partner-row">       
        <div className="g_center">
          <div className="c_partner-row__content">
          <h3 className="c_partner-row__heading">Our awesome partners:</h3>
            <ul className="c_partner-row__logos">
            {SiteData.partnerRow.map(item => 
            (
              <li key={item.id}>
                <a href="http://itera.no" aria-label="Visit Itera.no" target="_blank" rel="noopener noreferrer">
                  <img src={this.getIcon(item.id)} alt="Itera logo" />
                </a>
              </li>
            ))}
            </ul>
            <h3 className="c_partner-row__heading">Thank you so much!</h3>
          </div>
        </div>
      </header>
    );
  }
}

export default PartnerRow;