import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';

export default class Program extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Nav />
				<Header
					pageTitle="Program"
					type="date"
					theme="darkblue" />
				<h2>Program 2020</h2>
			</div>
		);
	}
}