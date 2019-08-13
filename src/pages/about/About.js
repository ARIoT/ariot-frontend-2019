import React from 'react';
import BigHeader from '../../components/bigHeader/BigHeader';
import Nav from '../../components/nav/Nav';
import LabelTextBox from '../../components/labelTextBox/LabelTextBox';
import Prototype from '../../data/prototype.json';
import './About.scss';

export default class About extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			allData: [],
			whereWhenWhat : [],
			why: []
		}
	}

	componentDidMount() {
		let dataUrl = 'http://ariot-cms.azurewebsites.net/wp-json/acf/v3/colored_text_box?_embed';
		fetch(dataUrl)
			.then(response => response.json())
			.then(allData => this.setState({allData: allData}));
	}

	renderWhereWhenWhat() {
		return (
			<div className="d">
				Jeg er renderWhereWhenWhat
			</div>
		)
	}

	

	render() {
		console.log(this.state.allData);
		return (
			<div className="t_about">
				<Nav />
				<BigHeader
					pageTitle="About"
				/>
				<div className="t_about__intro">
					<div className="g_center">
						{ this.state.allData && this.renderWhereWhenWhat() }
						<h2>The challenge...</h2>
						<p>We are not a typical 24-hour hackaton.</p>
						<p>The challenge lasts for three days where we except your team to compete with determination. The winner will get a magnificent trophy, alongside honour and glory.</p>
					</div>
				</div>

				<div className="c_label-text-boxes c_label-text-boxes--three">
					<div className="g_center">
						{Prototype.whereWhenWhat.map(item => (
							<LabelTextBox
							item={item}
							key={item.id}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}