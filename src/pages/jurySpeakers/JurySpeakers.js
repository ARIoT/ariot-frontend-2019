import React, { Fragment } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import People from '../../components/people/People';
import PeopleData from '../../data/jurySpeakers.json';
import './JurySpeakers.scss';

export default class JurySpeakers extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="t_jury-speakers t_page">
					<Nav />
					<Header
						pageTitle="Our VIP's"
						type="logo"
						theme="darkblue-yellow" />
					<div className="g_center">
						<h2>Jury</h2>
						{PeopleData.jury.map((item, index) => 
						(
							<People
								key = {`people-${index}`}
								item = {item}
							/>
						))}
					</div>
				</div>
				<PartnerRow />
				<Footer />
			</Fragment>
		);
	}
}