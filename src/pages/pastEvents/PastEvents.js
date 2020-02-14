import React, { Fragment } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Image from '../../components/image/Image';
import {Link } from 'react-router-dom';
import LastYearWrapper from '../../components/lastYear/lastYearWrapper';
import HistoryImage from '../../assets/images/helmet.jpg';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import './PastEvents.scss';

export default class PastEvents extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.match.params.year);
		return (
			<Fragment>
			<div className="t_past-events t_page">
				<Nav />
				<Header
					pageTitle="Our history"
					type="logo"
					theme="pink-darkblue" />
				<div className="g_center">
					<Image
						imgUrl={HistoryImage} 
						imgAlt="Just some cables"
						alignCenter
						overlayQuote="This place is so frekkin amazing, I always wanna come back! Thank you so much, Ariot! <3"
						quoteName="Bergliot P. Olar"
					/>
					<h2>So last year</h2>
					<Link to='/past-events/2019'>2019</Link>
					<Link to='/past-events/2018'>2018</Link>
					{!this.props.match.params === undefined && (
						<LastYearWrapper
							year = {this.props.match.param}
						/>
					)}
				</div>
			</div>
			<PartnerRow />
			<Footer />
		</Fragment>
		);
	}
}