import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import Image from '../../components/image/Image';
import { Link } from 'react-router-dom';
import { ReactComponent as AriotArrow } from '../../assets/icons/ariot-arrow.svg';
import HistoryImage from '../../assets/images/helmet.jpg';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import pastYearsData from '../../data/site.json';
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
						<Image
						imgUrl={HistoryImage} 
						imgAlt="Just some cables"
						alignCenter
						overlayQuote="This place is so frekkin amazing, I always wanna come back! Thank you so much, Ariot! <3"
						quoteName="Bergliot P. Olar"
					/>
					<div className="t_past-events__content">
						<h2>So last year...</h2>
						{pastYearsData && (
							<ul className="u_big-link-list">
							{pastYearsData.pastYears.reverse().map((item, index) => (
								<li key={`pastYearLink-${index}`}>
									<Link to={`/last-year/${item.value}`}>
										<span className="u_big-link-list__text">{item.value}</span>									
										<AriotArrow className="u_big-link-list__icon" />
									</Link>
								</li>
							))}
							</ul>
						)}
					</div>
				</div>
			</div>
			<PartnerRow />
			<Footer />
		</Fragment>
		);
	}
}