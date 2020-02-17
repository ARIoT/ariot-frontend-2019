import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import LabelTextBox from '../../components/labelTextBox/LabelTextBox';
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
							<h2 className="year-title">{thisYear}</h2>   
							<div className="u_label-text-boxes u_label-text-boxes--three">
								{thisYearData['topBoxes'] && (
									thisYearData['topBoxes'].map((item, index) => (
										<LabelTextBox
												item = {item}
												key = {`topBoxes-${item}`}
										/>
									)
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