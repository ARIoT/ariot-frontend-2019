import React, { Fragment } from 'react';
import Nav from '../../components/layout/nav/Nav';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PartnerRow from '../../components/partnerRow/PartnerRow';
import LabelTextBox from '../../components/labelTextBox/LabelTextBox';
import Leaderboard from 'components/leaderboard/Leaderboard';
import pastEventsData from '../../data/leaderboard.json';
import './Leaderboard.scss';

export default class CurrentLeaderboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }


    componentDidMount() {
        fetch("https://ariot.no/api/teams?id=0")
            .then(res => res.json())
            .then((result) => {
                let items = [];
                result.forEach((item, index) =>  {
                    items.push({
                        position: index + 1,
                        name: item.Name,
                        badges: item.Badges,
                        points: item.Points

                    })
                });
                this.setState({
                    isLoaded: true,
                    items: items
                    
                });
                },
                (error) => {
                   
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
    }

	render() {
        const boxData = pastEventsData["topBoxes"];

        const { error, isLoaded, items } = this.state;
        debugger;
        if (error) {
            return <div>
            <Fragment>
                    <div className="t_leaderboard t_page">
                        <Nav />
                        <Header
                            pageTitle="Leaderboard"
                            type="logo"
                            theme="pink-darkblue" />
                        <div className="g_center">
                        <div>Error: {error.message}</div>
                        </div>
                    </div>
                 <PartnerRow />
                <Footer />
            </Fragment>
        </div>;
          } else if (!isLoaded) {
            return <div>
                <Fragment>
                        <div className="t_leaderboard t_page">
                            <Nav />
                            <Header
                                pageTitle="Leaderboard"
                                type="logo"
                                theme="pink-darkblue" />
                            <div className="g_center">
                                Loading...
                            </div>
                        </div>
                     <PartnerRow />
                    <Footer />
                </Fragment>
            </div>;
          } else {
            return (
                <Fragment>
                        <div className="t_leaderboard t_page">
                            <Nav />
                            <Header
                                pageTitle="Leaderboard"
                                type="logo"
                                theme="pink-darkblue" />
                            <div className="g_center">
                                <Leaderboard item = {items} />
                                <br />
                                <br />

                                {boxData && (
                                    <div className="u_label-text-boxes u_label-text-boxes--two">
                                        {boxData.map((item, index) => (
                                            <LabelTextBox
                                                item = {item}
                                                key = {`topBoxes-${index}`}
                                        />
                                        ))}
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
}