import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import './JurySpeakers.scss';

export default class JurySpeakers extends React.Component {
	render() {
		return (
			<div className="t_jury-speakers t_page">
				<Nav />
				<Header
					pageTitle="Our VIP's"
					type="logo"
					theme="darkblue-yellow" />
				<div className="g_center">
					<h2>PEOPLE</h2>
				</div>
			</div>
		);
	}
}