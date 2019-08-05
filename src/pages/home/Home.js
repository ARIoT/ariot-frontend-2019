import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Header from '../../components/header/Header';

export default class Home extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
        <div className="c_home">
          <h2>Hallo :)</h2>
        </div>
			</div>
		);
	}
}