import React from 'react';
import Header from '../../components/header/Header';

export default class JurySpeakers extends React.Component {

	// Liste ut jury, speakers og komitemedlemmer. Alle kommer nok i samme liste, men må kunne filtrere på type i tillegg, f. eks "vis alle juryer" osv

	constructor(props) {
		super(props);
		this.state = {
			people: [],
			isLoading: true,
		}
	}

	componentDidMount() {
		let dataUrl = this.props.mainMenuUrl;
		fetch(dataUrl)
			.then(response => response.json())
			.then(mainMenuItems => this.setState({mainMenuItems: mainMenuItems.reverse()}));			
	}
	

	render() {
		return (
			<div className="wrapper">
				<Header />
				<h2>The heroes</h2>
				<ul>
				{/* {this.state.mainMenuItems.map(item => 
				(
					<li className="c_nav__main-menu__item">
						<NavLink exact to={item.acf.url} activeClassName="active">
							{item.acf.title}
						</NavLink>
					</li>
				))} */}
				</ul>
			</div>
		);
	}
}