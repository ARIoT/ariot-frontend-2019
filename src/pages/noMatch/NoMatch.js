import React from 'react';
import Header from '../../components/header/Header';

export default class NoMatch extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<h1>404</h1>
			</div>
		);
	}
}