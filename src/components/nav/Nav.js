import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import Site from '../../data/prototype.json';

class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			mainMenuItems: [],
			isLoading: true,
		}
	}

	componentDidMount() {
		let dataUrl = this.props.mainMenuUrl;
		fetch(dataUrl)
			.then(response => response.json())
			.then(mainMenuItems => this.setState({mainMenuItems: mainMenuItems.reverse()}));			
	}

	render() {
		return (
			<nav className={`c_nav ${this.props.navOpen ? 'c_nav--open' : ''}`} role="navigation" aria-label="Hovedmeny">
			
  		<ul className="c_nav__main-menu">
				{Site.mainMenu.map(item => 
				(
					<li className="c_nav__main-menu__item">
						<NavLink exact to={`/` + item.url} activeClassName="active">
							{item.name}
						</NavLink>
					</li>
				))}  			
  		</ul>
  	</nav>
		)
	}
}

export default Nav;