import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
	render() {
		return (
			<nav className={`c_nav ${this.props.navOpen ? 'c_nav--open' : ''}`} role="navigation" aria-label="Hovedmeny">			
  		<ul>
  			<li>
          <Link to="/om" aria-label="Gå til Om-siden">Om</Link>
  			</li>
        <li>
          <Link to="/404" aria-label="Gå til 404-siden">404</Link>
        </li>
  		</ul>
  	</nav>
		)
	}
}

export default Nav;