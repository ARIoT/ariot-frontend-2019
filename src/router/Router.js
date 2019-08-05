import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NoMatch from '../pages/noMatch/NoMatch';

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/om" exact component={About} />
      <Route component={NoMatch} />
		</Switch>
	</Router>
);