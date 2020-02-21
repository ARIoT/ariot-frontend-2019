import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import Image from '../../components/image/Image';
import VenueImage from '../../assets/images/venueImage.jpg';
import './SignUp.scss';

export default class SignUp extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Fragment>
				<div className="t_sign-up t_page">
					<Nav />
					<Header
						pageTitle="Sign up"
						type="logo"
						theme="yellow-darkblue" />
					<div className="g_center g_center--text">
						
						<h2 className="big-blue">
							En kul overskrift
						</h2>
						<h2>Come and join us!</h2>
						<p className="u_ingress">All you need to do is to send us an e-mail at <a href="mailto:signup@ariot.no" title="Send us an e-mail if you have any questions">signup@ariot.no</a>.</p>
						<h4>What we need from you</h4>
						<ul>
							<li>
								<p>Team name</p>
							</li>
							<li>
								<p>Company</p>
							</li>
							<li>
								<p>Team leader (Basically, our single point of contact with your team. How you organize internally is none of our business.)</p>
							</li>
							<li>
								<p>Name of all team members</p>
							</li>
						</ul>
						

						<h3 className="big-blue">
							Price NOK 7.500,- (ex. VAT) pr. attendee
						</h3>
						<h4>This includes</h4>
						<ul>
							<li>
								<p>Entry to the challenge. We will have </p>
							</li>
							<li>
								<p>Tasty breakfast, lunch and dinner (and hopefully some snacks!)</p>
							</li>
							<li>
								<p>Comfy hotel room Thursday - Sunday at <a href="http://voksenaasen.no" target="_blank" rel="noopener noreferrer">Voksenåsen Hotel</a> *</p>
								<p className="u_sidenote">* = We strongly recommend that participants include a hotel room, even when they live in or nearby Oslo. Magic happens all day long - not just during daytime, and staying at the hotel saves travel time, increases focus on the challenge and provides a unique opportunity to connect with other teams. If you are on a budget and need to skip the hotel room for a lower price, please contact us at <a href="mailto:signup@ariot.no" title="Send us an e-mail if you have any questions">signup@ariot.no</a>.</p>
							</li>
						</ul>

						<h4>The venue</h4>
						<p><a href="http://voksenaasen.no" target="_blank" rel="noopener noreferrer">Voksenåsen Hotel</a> is located west of Oslo city centre, on the border of the woods. It has a fantastic view over Oslo and the Oslofjord, and provides a perfect environment for focusing on teamwork and creating cool solutions.</p>

						<Image
							imgUrl={VenueImage}
							imgAlt="A nice view"
						/>

						<h4>Some nitty-gritties</h4>
						<ul>
							<li>
								<p>Get to know the badges in beforehand of the event. That way tour team meets prepared on how to include them in your project</p>
							</li>
							<li>
								<p>Your team needs to bring all yout computers, keyboards, monitors, cables or other stuff you need during your project</p>
							</li>						
						</ul>

						<p><em>By signing up, you commit to the non-refundable signup fee. You can still change members after signing up, but not reduce the number of attendees. (In Norwegian: Påmeldingen er bindende).</em></p>
						<a 
							className="c_cta c_cta--blue signup-button"
							href="mailto:signup@ariot.no" 
							title="Write us an e-mail and sign up for Ariot todat!">Sign up!</a>
					</div>
				</div>
				<PartnerRow />
				<Footer />
			</Fragment>
		);
	}
}