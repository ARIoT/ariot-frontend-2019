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
						<section className="c_people-section">
							<div className="c_people-section__intro">
								<h2>Jury</h2>
								<p>Some new, some returning!</p>
							</div>
							{PeopleData.jury.map((item, index) => 
							(
								<People
									key = {`people-${index}`}
									item = {item}
								/>
							))}
						</section>

						<section className="c_people-section">
							<div className="c_people-section__intro">
								<h2>Committee</h2>
								<p>There would be no Ariot without it's committee! And we're always looking for more people to help us out.</p>
							</div>							
							{PeopleData.comittee.map((item, index) => 
							(
								<People
									key = {`people-${index}`}
									item = {item}
								/>
							))}
						</section>
					</div>
				</div>
				<PartnerRow />
				<Footer />
			</Fragment>
		);
	}
}