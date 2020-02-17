import React from 'react';
import './Home.scss';
import Header from '../../components/layout/nav/header/Header';
import PrototypeData from '../../data/prototype.json';

export default class Home extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
        <div className="c_home">
          <h2>Hallo :)</h2>
					<ul className="c_palette">
						{PrototypeData.colors.map(item => 
						(
							<li className={`c_palette__item  ${item.dark ? 'c_palette__item--dark' : ''}`} style={{backgroundColor: item.hex}}>
								<span>{item.name}</span>
							</li>
						))}
					</ul>
        </div>
			</div>
		);
	}
}