import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Countdown from '../../components/countdown/Countdown';
import './SignUp.scss';

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="t_sign-up t_page">
				<Nav />
				<Header
					pageTitle="Sign up"
					type="logo"
					theme="yellow-darkblue" />
				<div className="g_center">
					<Countdown />
					<div className="page-intro">
						fdf
					</div>
				</div>
			</div>
		);
	}
}