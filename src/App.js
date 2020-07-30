import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/AboutUs';

export default function App() {
	return (
		<div>
			<Switch>
				<Route component={About} path={'/about'} />
				<Route component={Home} path={'/'} />
			</Switch>
		</div>
	);
}
