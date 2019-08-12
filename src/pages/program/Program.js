import React, { Fragment } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import Footer from '../../components/footer/Footer';
import './Program.scss';

export default class Program extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="t_program t_page">
					<Nav />
					<Header
						pageTitle="Program"
						type="date"
						theme="darkblue-blue" />
					<div className="g_center">
						<h2>Program 2020 innhold</h2>
					</div>
				</div>
				<PartnerRow />
				<Footer />
			</Fragment>
		);
	}
}