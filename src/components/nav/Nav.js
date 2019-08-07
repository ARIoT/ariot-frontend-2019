import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import SiteData from '../../data/site.json';

class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			mainMenuItems: [],
			isLoading: true,
			navOpen: false,
		}
		this.toggleMainMenu = this.toggleMainMenu.bind(this);
	}

	componentDidMount() {
		let dataUrl = this.props.mainMenuUrl;
		fetch(dataUrl)
			.then(response => response.json())
			.then(mainMenuItems => this.setState({mainMenuItems: mainMenuItems.reverse()}));			
	}

  toggleMainMenu() {
		this.setState({
			navOpen: !this.state.navOpen
		});
	}

	render() {
		return (
			<nav className="c_nav" role="navigation" aria-label="Hovedmeny">
				<button className={`c_nav__toggle-menu-button ${this.state.navOpen ? 'c_nav__toggle-menu-button--clicked' : ''}`} aria-label="Åpne/lukke menyen" onClick={this.toggleMainMenu} tabIndex="1">
					Menu
				</button>
  		<ul className={`c_nav__main-menu ${this.state.navOpen ? 'c_nav__main-menu--open' : ''}`}>
				{SiteData.mainMenu.map(item => 
				(
					<li className={`c_nav__main-menu__item ${item.extraClass ? 'c_nav__main-menu__item--' + item.extraClass : ''}`}>
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