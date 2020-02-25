import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import BadgesData from '../../data/badges.json';
import Badge from '../../components/badge/Badge';
import { ReactComponent as IconListView } from '../../assets/icons/icon.list.svg';
import { ReactComponent as IconGridView } from '../../assets/icons/icon.grid.svg';
import './Badges.scss';

export default class Badges extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			badgeView: 'list',
			whatToShow: 'badges'
		}
	}
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	changeWhatToShow(newWhatToShow) {
		this.setState(
			{whatToShow: newWhatToShow}
		)
	}

	changeBadgeView(newLIstView) {
		this.setState(
			{badgeView: newLIstView}
		)
	}

	render() {
		return (
		<Fragment>
				<div className="t_badges t_page" >
					
					<Nav />
					<Header
						pageTitle="Badges"
						type="logo"
						theme="turquoise-darkblue" />
					
					<div className="g_center">
						<div className="t_badges__choose-list">
							<button
								type="button"
								className={`c_button c_button--light-text ${this.state.whatToShow === 'badges' ? 'c_button--active' : ''}`}
								onClick={() => this.changeWhatToShow('badges')}
							>
								<span>Badges</span>
							</button>
							<button
								type="button"
								className={`c_button c_button--light-text ${this.state.whatToShow === 'awards' ? 'c_button--active' : ''}`}
								onClick={() => this.changeWhatToShow('awards')}
							>
								<span>Awards</span>
							</button>
						</div>

						{this.state.whatToShow === 'badges' && (
							<div className="t_badges__main-content">
								<p>We want to see a underlying theme, a thread throughout your project. Each badge should have it's place in the solution. Every team can get each badge (except Race condition).</p>
								<div className="t_badges__main-content__change-view">
									<button
										type="button"
										className={`c_button c_button--turquoise-text ${this.state.badgeView === 'list' ? 'c_button--active' : ''}`}
										onClick={() => this.changeBadgeView('list')}
									>
										<IconListView 	
											className="c_button--change-view__list" 
										/>
										<span>List</span>
									</button>
									<button
										type="button"
										className={`c_button c_button--turquoise-text ${this.state.badgeView === 'grid' ? 'c_button--active' : ''}`}
										onClick={() => this.changeBadgeView('grid')}
									>
										<IconGridView 	
											className="c_button--change-view__grid" 
										/>
										<span>Grid</span>
									</button>
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
						)}
						{this.state.whatToShow === 'awards' && (
							<div className="t_badges__main-content">
								<p>Only one of each award can be given out. You cannot apply for this badge, it is a jury decision and the lucky ones will be called out during the dinner on Saturday. If you are going for the oppurtunity to get an extra 500 points, have the criteria in the back of your head during the event.</p>
								<div className="t_badges__main-content__change-view">
									<button
										type="button"
										className={`c_button c_button--turquoise-text ${this.state.badgeView === 'list' ? 'c_button--active' : ''}`}
										onClick={() => this.changeBadgeView('list')}
									>
										<IconListView 	
											className="c_button--change-view__list" 
										/>
										<span>List</span>
									</button>
									<button
										type="button"
										className={`c_button c_button--turquoise-text ${this.state.badgeView === 'grid' ? 'c_button--active' : ''}`}
										onClick={() => this.changeBadgeView('grid')}
									>
										<IconGridView 	
											className="c_button--change-view__grid" 
										/>
										<span>Grid</span>
									</button>
								</div>
								<div className={`badge-list badge-list--${this.state.badgeView}`}>
									{BadgesData.awards.map((item, index) => 
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
						)}
					</div>				
				</div>
				<PartnerRow />
				<Footer />
		</Fragment>
		);
	}
}