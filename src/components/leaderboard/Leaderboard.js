import React, { Component } from 'react';
import './Leaderboard.scss';
// import SiteData from '../../data/site.json';

class Leaderboard extends Component {

  render() {
    const {
      position,
      team,
      badges,
      points
  } = this.props.item;
    
    return (
      <div className="c_leaderboard">
        <span className="c_leaderboard__label">
          Leaderboard
        </span>
        <table className="u_table u_table--responsive">
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Badges</th>
              <th>Points</th>
            </tr>
          </thead>
        {this.props.item.map((item, index) => (
          <tbody>
            <tr key={`leaderboardTableTr-${index}`}>
              <td className="c_leaderboard__position">{item.position}</td>
              <td className="c_leaderboard__team">{item.name}</td>
              <td className="c_leaderboard__badges" data-th="Badges:">{item.badges}</td>
              <td className="c_leaderboard__points" data-th="Points:">{item.points}</td>
          </tr>
          </tbody>
        ))}
        </table>
      </div>
    );
  }
}

export default Leaderboard;