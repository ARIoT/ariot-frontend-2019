import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import './NoMatch.scss';
// import Footer from '../../components/layout/footer/Footer';
// import PartnerRow from '../../components/partnerRow/PartnerRow';

export default class NoMatch extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Fragment>
				<div className="t_no-match t_page">
					<Nav />
					<Header
						pageTitle="Sawry"
						type="logo"
						theme="turquoise-darkblue" />
					<div className="t_no-match__content">
						<div className="g_center">

						<h1>404</h1>

						</div>
					</div>					
				</div>
			</Fragment>		
		);
	}
}