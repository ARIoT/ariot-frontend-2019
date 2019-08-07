import React, { Component } from 'react'
import './MobileTopHeader.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);    
  }

  render() {

    const {
      page
    } = this.props;

    return (
      <header className="c_header">    
        <Link to="/" className="c_header__logo">
          <h1>Ariot</h1>
        </Link>
        <button className={`c_header__toggle-menu-button ${this.state.navOpen ? 'c_header__toggle-menu-button--clicked' : ''}`} aria-label="Åpne/lukke menyen" onClick={this.toggleMainMenu}>
        Menu
        </button>
        {/* <Nav 
          navOpen={this.state.navOpen}
          mainMenuUrl='http://ariot-cms.azurewebsites.net/wp-json/acf/v3/mainmenu'
        /> */}
      </header>
    );
  }
}

export default Header;