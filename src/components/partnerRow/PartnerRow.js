import React, { Component } from 'react';
import './PartnerRow.scss';
import SiteData from '../../data/site.json';
import { ReactComponent as IteraLogo } from '../../assets/images/logos/itera-logo.svg';
import { ReactComponent as MicrosoftLogo } from '../../assets/images/logos/microsoft-logo.svg';

class PartnerRow extends Component {

  constructor() {
    super();
    this.getIcon = this.getIcon.bind(this);
}

  getIcon(logo) {
    switch (logo) {
    case 'itera-partner':
        return <IteraLogo />;
    case 'microsoft-partner':
        return <MicrosoftLogo />;
    default:
        return null;
    }
}

  render() {

    return (
      <div className="c_partner-row">       
        <div className="g_center">
          <div className="c_partner-row__content">
          <h3 className="c_partner-row__heading">Our awesome partners:</h3>
            <ul className="c_partner-row__logos">
            {SiteData.partnerRow.map(item => 
            (
              <li key={item.id}>
                <a href="http://itera.no" aria-label="Visit Itera.no" target="_blank" rel="noopener noreferrer">
                  {this.getIcon(item.id)}
                </a>
              </li>
            ))}
            </ul>
            <h3 className="c_partner-row__heading">Thank you so much!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerRow;