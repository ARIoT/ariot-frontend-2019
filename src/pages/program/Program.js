import React, { Fragment } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Day from '../../components/day/Day';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import ProgramData from '../../data/program.json';
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
						<div className="c_program__types">
							<span className="type type--talks">
								Talks
							</span>
							<span className="type type--social">
								Social
							</span>
							<span className="type type--hacking">
								Hacking
							</span>
						</div>
						{ProgramData.map((item, index) => 
						(
							<Day
								key={`day-${index}`}
								item={item}
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