import React, { Fragment } from 'react';
import BigHeader from '../../components/bigHeader/BigHeader';
import Nav from '../../components/nav/Nav';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import Footer from '../../components/footer/Footer';
import LabelTextBox from '../../components/labelTextBox/LabelTextBox';
import Prototype from '../../data/prototype.json';
import './About.scss';

export default class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			allData: [],
			whereWhenWhat : []
		}
	}

	componentDidMount() {
		let dataUrl = 'http://ariot-cms.azurewebsites.net/wp-json/acf/v3/colored_text_box?_embed';
		fetch(dataUrl)
			.then(response => response.json())
			.then(allData => this.setState({allData: allData}));
	}

	// Denne skal bruke allData, og hente ut alle som har placement : about_where_when_what og returnere det i en <LabelTextBox />
	renderWhereWhenWhat() {
		let allArrays = this.state.allData;
		return (
			<div className="c_label-text-boxes c_label-text-boxes--three">
				Jeg er renderWhereWhenWhat
				{allArrays.map( item => (
					Object.values(item.acf)
					// DETTE GÅR IKKE
				))}
			</div>
		)
	}

	

	render() {
		return (
			<Fragment>
				<div className="t_about">
					<Nav />
					<BigHeader
						pageTitle="About"
					/>
					<div className="t_about__intro">
						<div className="g_center">
							<h2>The challenge...</h2>
							<p>We are not a typical 24-hour hackaton.</p>
							<p>The challenge lasts for three days where we except your team to compete with determination. The winner will get a magnificent trophy, alongside honour and glory.</p>
						</div>
					</div>

					{/* { this.state.allData && this.renderWhereWhenWhat() } */}

					{/* Hardkodet for nå, men skal jo bruke data fra WP */}
					<div className="g_center">
						<div className="c_label-text-boxes c_label-text-boxes--three c_label-text-boxes--wherewhenwhat">						
							{Prototype.whereWhenWhat.map(item => (
								<LabelTextBox
								item={item}
								key={item.id}
								/>
							))}
						</div>

						<div className="c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--why">						
								{Prototype.whyAbout.map(item => (
									<LabelTextBox
									item={item}
									key={item.id}
									/>
								))}
						</div>

						
						<div className="c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--price">
							{Prototype.priceAbout.map(item => (
								<LabelTextBox
								item={item}
								key={item.id}
								/>
							))}
						</div>
						
						<div className="c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--how">
							{Prototype.howAbout.map(item => (
								<LabelTextBox
								item={item}
								key={item.id}
								/>
							))}
						</div>
						
						<div className="c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--bottom-boxes-about">
							{Prototype.bottomBoxesAbout.map(item => (
								<LabelTextBox
								item={item}
								key={item.id}
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