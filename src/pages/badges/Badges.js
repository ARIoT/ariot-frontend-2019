import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import './Badges.scss';

export default class Badges extends React.Component {
	render() {
		return (
			<div className="t_badges t_page">
				<Nav />
				<Header
					pageTitle="Badges"
					type="logo"
					theme="turquoise-darkblue" />
				<div className="g_center">
					<h2>Badges</h2>
				</div>
			</div>
		);
	}
}