import React, { Fragment } from 'react';
import BigHeader from '../../components/layout/bigHeader/BigHeader';
import Nav from '../../components/layout/nav/Nav';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import Footer from '../../components/layout/footer/Footer';
import Image from '../../components/image/Image';
import LabelTextBox from '../../components/labelTextBox/LabelTextBox';
import Prototype from '../../data/prototype.json';
import Visma2019Image from '../../assets/images/visma2019.jpg';
import SpyDogImage from '../../assets/images/spyDog2019.jpg';
import Busy2018Image from '../../assets/images/busy2018.jpg';
import NiceViewImage from '../../assets/images/niceView.jpg';
import './About.scss';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allData: [],
			whereWhenWhat: []
		};
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	// Fetch feiler pga CORS-feil, og jeg får det ikke til akkurat nå
	// componentDidMount() {
	// let dataUrl = 'http://ariot-cms.azurewebsites.net/wp-json/acf/v3/colored_text_box?_embed';
	// fetch(dataUrl)
	// 	.then(response => response.json())
	// 	.then(allData => this.setState({allData: allData}));
	// }

	// Denne skal bruke allData, og hente ut alle som har placement : about_where_when_what og returnere det i en <LabelTextBox />
	renderWhereWhenWhat() {
		let allArrays = this.state.allData;
		// const filterValue = 'about_where_when_what';

		// const newCoolArray = allArrays.filter(hepp => hepp.acf.placement === filterValue);
		// console.log(allArrays);
		return (
			<div className='c_label-text-boxes c_label-text-boxes--three'>
				{allArrays.map(item => Object.values(item.acf))}
			</div>
		);
	}

	render() {
		return (
			<Fragment>
				<div className='t_about'>
					<Nav />
					<BigHeader pageTitle='About' />
					<div className='t_about__intro'>
						<div className='g_center'>
							<div className='c_obs-note'>
								<h2>Oh noes...</h2>
								<p>
									It is with a heavy heart that we have to cancel this years’
									Arctic IoT Challenge due to the increasing restrictions given
									by the FHI with regards to Covid-19
								</p>
								<p>
									We are so sorry for the inconvenience, but we don't want to
									risk peoples health.
								</p>
								<p>
									We'll let you know as soon as we have news about the next
									event!
								</p>
							</div>
							<h2>The challenge...</h2>
							<p>We are not a typical 24-hour hackaton.</p>
							<p>
								The challenge lasts for three days where we except your team to
								compete with determination. The winner will get a magnificent
								trophy, alongside honour and glory.
							</p>
						</div>
					</div>

					{/* { this.state.allData && this.renderWhereWhenWhat() } */}

					{/* Hardkodet for nå, men skal jo bruke data fra WP */}
					<div className='g_center'>
						<div className='u_label-text-boxes u_label-text-boxes--three c_label-text-boxes--wherewhenwhat'>
							{Prototype.whereWhenWhat.map((item, index) => (
								<LabelTextBox
									item={item}
									key={`wherewhenwhat-${item.id}-${index}`}
								/>
							))}
						</div>

						<Image
							imgUrl={SpyDogImage}
							imgAlt='A vicious spy, or a good protector?'
						/>

						<div className='c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--why'>
							{Prototype.whyAbout.map((item, index) => (
								<LabelTextBox item={item} key={`why-${item.id}-${index}`} />
							))}
						</div>

						<Image
							imgUrl={Visma2019Image}
							alignCenter
							imgAlt='The ever so happy Visma team'
						/>

						<div className='c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--price'>
							{Prototype.priceAbout.map((item, index) => (
								<LabelTextBox item={item} key={`price-${index}`} />
							))}
						</div>

						<Image imgUrl={Busy2018Image} imgAlt='Concentrated work' />

						<div className='c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--how'>
							{Prototype.howAbout.map((item, index) => (
								<LabelTextBox item={item} key={`how-${item.id}-${index}`} />
							))}
						</div>

						<Image
							imgUrl={NiceViewImage}
							alignCenter
							imgAlt='Very nice view from Voksenåsen Hotell'
						/>

						<div className='c_label-text-boxes c_label-text-boxes--one c_label-text-boxes--bottom-boxes-about'>
							{Prototype.bottomBoxesAbout.map((item, index) => (
								<LabelTextBox item={item} key={`about-${index}`} />
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
