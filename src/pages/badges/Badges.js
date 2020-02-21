import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import BadgesData from '../../data/badges.json';
import Badge from '../../components/badge/Badge';
import './Badges.scss';

export default class Badges extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			badgeView: 'list'
		}
	}
	
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	changeBadgeView(newLIstView) {
		this.setState(
			{badgeView: newLIstView}
		)
	}

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
						<p>We want to see a underlying theme, a thread throughout your project. Each badge should have it's place in the solution.</p>
						<div className="page-intro__actions">
							<button
								type="button"
								className={`c_button c_button--change-view c_button--light-text ${this.state.badgeView === 'list' ? 'c_button--active' : ''}`}
								onClick={() => this.changeBadgeView('list')}
							>
								List
							</button>
							<button
								type="button"
								className={`c_button c_button--change-view c_button--light-text ${this.state.badgeView === 'grid' ? 'c_button--active' : ''}`}
								onClick={() => this.changeBadgeView('grid')}
							>
								Grid
							</button>
						</div>
					</div>
					
					<div className={`badge-list badge-list--${this.state.badgeView}`}>
						{BadgesData.badges.map((item, index) => 
						(
							<Badge
								key = {`badge-${index}`}
								index = {index}
								item = {item}
								viewedIn = {this.state.badgeView}
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