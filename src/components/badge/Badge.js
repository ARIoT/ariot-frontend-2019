import React, { Component, Fragment } from 'react';
import './Badge.scss';
// import SiteData from '../../data/site.json';

class Badge extends Component {

  constructor() {
      super();
      this.state = {        
        criteriaOpen: false,
      }
      this.toggleCriteria = this.toggleCriteria.bind(this);
      this.badgeImages = require.context('../../assets/images/badges', true);
  }

  toggleCriteria() {
		this.setState({
			criteriaOpen: !this.state.criteriaOpen
		});
	}

  render() {
    const {
      title,
      intro,
      badge,
      points,
      criteria
  } = this.props.item;

  
    let badgeImage = this.badgeImages(`./${badge}`);
    
    
    return (
      <div className={`c_badge c_badge--${this.props.viewedIn}`}>       
       <div className="c_badge__content">
        <div className="c_badge__image">
          <figure>
            <img src={badgeImage} alt={`The ${title} badge`}/>        
            
            <figcaption>{points} points</figcaption>
          </figure>
        </div>
          <div className="c_badge__text">
          <h2 className="text__title">
            <span className="text__title__number">{this.props.index + 1}</span>
            <span className="text__title__name">{title}</span>
          </h2>
          <p className="text__intro">{intro}</p>
          {criteria && (
            <Fragment>
              <button className="c_badge__toggle-criteria-button c_button--light-text" onClick={this.toggleCriteria}>
                Show criteria
              </button>
              <div className={`c_badge__criteria ${this.state.criteriaOpen ? 'c_badge__criteria--open' : ''}`}>
                <h3>Criteria for this badge:</h3>
                <ul className="u_mega-bullet-list">
                {criteria.map(listItem => 
                	(
                    <li>
                      <p>{listItem.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          )}
        </div>
        
       </div>
      </div>
    );
  }
}

export default Badge;