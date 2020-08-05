import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/AboutUs';
import Services from './views/Services';
import Contact from './views/ContactUs';
import HelpCenter from './views/HelpCenter';
import Sitemap from './views/Sitemap';

export default function App() {
	return (
		<div>
			<Switch>
				<Route component={About} path={'/about'} />
				<Route component={Services} path={'/services'} />
				<Route component={Contact} path={'/contact'} />
				<Route component={HelpCenter} path={'/help'} />
				<Route component={Sitemap} path={'/sitemap'} />
				<Route component={Home} path={'/'} />
			</Switch>
		</div>
	);
}
