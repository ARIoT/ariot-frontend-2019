import React, { Fragment } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Image from '../../components/image/Image';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import './PastEvents.scss';

export default class PastEvents extends React.Component {
	render() {
		return (
			<Fragment>
			<div className="t_past-events t_page">
				<Nav />
				<Header
					pageTitle="Our history"
					type="logo"
					theme="pink-darkblue" />
				<div className="g_center">
					<h2>So last year</h2>
				</div>
			</div>
			<PartnerRow />
			<Footer />
		</Fragment>
		);
	}
}