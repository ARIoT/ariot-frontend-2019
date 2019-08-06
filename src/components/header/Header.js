import React, { Component } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/pro-light-svg-icons';
import Nav from '../../components/nav/Nav';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }
    this.toggleMainMenu = this.toggleMainMenu.bind(this);
  }  

  toggleMainMenu() {
    // window.scrollTo(0, 0);
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return (
      <header className="c_header">    
        <Link to="/" className="c_header__logo">
          <h1>Ariot</h1>
        </Link>
        <button className={`c_header__toggle-menu-button ${this.state.navOpen ? 'c_header__toggle-menu-button--clicked' : ''}`} aria-label="Åpne/lukke menyen" onClick={this.toggleMainMenu}>
        Meny
        </button>
        <Nav 
          navOpen={this.state.navOpen}
          mainMenuUrl='http://ariot-cms.azurewebsites.net/wp-json/acf/v3/mainmenu'
        />
      </header>
    );
  }
}

export default Header;