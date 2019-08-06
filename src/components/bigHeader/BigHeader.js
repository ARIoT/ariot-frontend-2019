import React, { Component } from 'react'
import './BigHeader.scss';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/pro-light-svg-icons';
// import Nav from '../../components/nav/Nav';

class BigHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     navOpen: false
  //   }
  //   this.toggleMainMenu = this.toggleMainMenu.bind(this);
  // }  

  // toggleMainMenu() {
  //   this.setState({
  //     navOpen: !this.state.navOpen
  //   });
  // }

  render() {
    return (
      <header className="c_big-header">    
        <Link to="/" className="c_header__logo">
          <h1>STOR header</h1>
        </Link>
        
      </header>
    );
  }
}

export default BigHeader;