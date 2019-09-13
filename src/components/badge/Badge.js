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
  }

  toggleCriteria() {
		this.setState({
			criteriaOpen: !this.state.criteriaOpen
		});
	}

  render() {
    const {
      id,
      title,
      intro,
      image,
      points,
      criteria
  } = this.props.item;
    
    return (
      <div className="c_badge">       
       <div className="c_badge__content">
        <div className="c_badge__image">
          <figure>
            <img src={image} alt={`The ${title} badge`}/>
            <figcaption>{points} points</figcaption>
          </figure>
        </div>
        <div className="c_badge__text">
          <h2 className="text__title">
            <span className="text__title__number">{id}</span>
            <span className="text__title__name">{title}</span>
          </h2>
          <p className="text__intro">{intro}</p>
          {criteria && (
            <Fragment>
              <button className="c_badge__toggle-criteria-button" onClick={this.toggleCriteria}>
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