import React, { Fragment } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import './LastYear.scss';

export default class PastEvents extends React.Component {

    constructor(props) {
        super(props);
    }


	render() {
		return (
			<Fragment>
                <div className="t_past-events t_page">
                    <Nav />
                    <Header
                        pageTitle="Our history"
                        type="logo"
                        theme="pink-darkblue" />
                    <div className="g_center">
                        <h2>jeg er child</h2>
                        {/* <h3>Match {this.match}</h3> */}
                    </div>
                </div>
                <PartnerRow />
                <Footer />
            </Fragment>
		);
	}
}