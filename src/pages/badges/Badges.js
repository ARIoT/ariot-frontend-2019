import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import BadgesData from '../../data/badges.json';
import Badge from '../../components/badge/Badge';
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
					<div className="badge-list">
						{BadgesData.badges.map(item => 
						(
							<Badge
								item={item}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}