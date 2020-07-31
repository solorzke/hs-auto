import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/AboutUs';
import Services from './views/Services';
import Contact from './views/ContactUs';

export default function App() {
	return (
		<div>
			<Switch>
				<Route component={About} path={'/about'} />
				<Route component={Services} path={'/services'} />
				<Route component={Contact} path={'/contact'} />
				<Route component={Home} path={'/'} />
			</Switch>
		</div>
	);
}
