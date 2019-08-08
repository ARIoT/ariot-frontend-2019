import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Program from '../pages/program/Program';
import Badges from '../pages/badges/Badges';
import JurySpeakers from '../pages/jurySpeakers/JurySpeakers';
import SignUp from '../pages/signUp/SignUp';
import PastEvents from '../pages/pastEvents/PastEvents';
import NoMatch from '../pages/noMatch/NoMatch'; 

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={About} />
			<Route path="/about" exact component={About} />
			<Route path="/program-2020" exact component={Program} />
			<Route path="/badges" exact component={Badges} />
			<Route path="/jury-speakers" exact component={JurySpeakers} />
			<Route path="/past-events" exact component={PastEvents} />
			<Route path="/sign-up" exact component={SignUp} />
      <Route component={NoMatch} />
		</Switch>
	</Router>
);