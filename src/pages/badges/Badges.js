import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import BadgesData from '../../data/badges.json';
import Badge from '../../components/badge/Badge';
import './Badges.scss';

export default class Badges extends React.Component {
	render() {
		return (
		<Fragment>
			<div className="t_badges t_page">
				<Nav />
				<Header
					pageTitle="Badges"
					type="logo"
					theme="turquoise-darkblue" />
				<div className="g_center">
					<div className="page-intro">
						<p>Her kommer en kul tekst om badgene :))))</p>
					</div>
					<div className="badge-list">
						{BadgesData.badges.map((item, index) => 
						(
							<Badge
								key = {`badge-${index}`}
								item = {item}
							/>
						))}
					</div>
				</div>
			</div>
			<PartnerRow />
			<Footer />
		</Fragment>
		);
	}
}