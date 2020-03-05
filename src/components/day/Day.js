import React, { Component } from 'react';
import './Day.scss';
// import SiteData from '../../data/site.json';

class Day extends Component {
	render() {
		const { day, stops, date, text } = this.props.item;

		return (
			<div className='c_day'>
				<h3 className='c_day__name'>
					<span className='c_day__name__date'>{date}</span>
					<span className='c_day__name__day'>{day}</span>
				</h3>
				{text && <p className='c_day__text'>{text}</p>}
				<div className='c_day__program'>
					<ul>
						{stops.map((item, index) => (
							<li key={`programItem-${index}`}>
								{item.type && (
									<span
										className={`program-item__type program-item__type--${item.type}`}
									/>
								)}
								<span className='program-item__time'>{item.time}</span>
								<span className='program-item__activity'>{item.activity}</span>
								{item.extraInfo && (
									<span className='program-item__extra-info'>
										{item.extraInfo}
									</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Day;
