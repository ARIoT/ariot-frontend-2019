import React from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import SignupForm from '../../components/signupForm/SignupForm';
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
					<div className="page-intro">
						<h2>Come and join us!</h2>
						<SignupForm />
					</div>
				</div>
			</div>
		);
	}
}