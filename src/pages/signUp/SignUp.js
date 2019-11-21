import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Countdown from '../../components/countdown/Countdown';
import './SignUp.scss';

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="t_sign-up t_pagnjkjke">
				<Nav />
				<Header
					pageTitle="Sign up"
					type="logo"
					theme="yellow-darkblue" />

				<div className="g_center">
					<Countdown
						thenDate = '09 25 2019, 11:00 pm'
						timeFormat = 'MM DD YYYY, h:mm a'
						date = '09 25 2019'
					/>
					<div className="page-intro">
						<h2>Come and join us!</h2>
FF
					</div>
				</div>

			</div>
		);
	}
}