import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/AboutUs';
import Services from './views/Services';

export default function App() {
	return (
		<div>
			<Switch>
				<Route component={About} path={'/about'} />
				<Route component={Services} path={'/services'} />
				<Route component={Home} path={'/'} />
			</Switch>
		</div>
	);
}
