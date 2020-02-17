import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import LabelTextBox from '../../components/labelTextBox/LabelTextBox';
import Leaderboard from 'components/leaderboard/Leaderboard';
import pastEventsData from '../../data/pastEvents.json';
import './LastYear.scss';

export default class LastYear extends React.Component {

    componentDidMount() {

    }

	render() {
        const thisYear = this.props.match.params.year;
        const thisYearData = pastEventsData[thisYear];
		return (
			<Fragment>
					<div className="t_last-year t_page">
						<Nav />
						<Header
							pageTitle="Our history"
							type="logo"
							theme="pink-darkblue" />
						<div className="g_center">
							<h2 className="year-title">...back to {thisYear}</h2>
							{thisYearData['topBoxes'] && (
								<div className="u_label-text-boxes u_label-text-boxes--three">
									{thisYearData['topBoxes'].map((item, index) => (
										<LabelTextBox
											item = {item}
											key = {`topBoxes-${index}`}
									/>
									))}
								</div>	
							)}

							{thisYearData['leaderboard'] && (
								<Leaderboard
									item = {thisYearData['leaderboard']} />
								
							)}
						</div>
					</div>
					<PartnerRow />
					<Footer />
			</Fragment>
		);
	}
}