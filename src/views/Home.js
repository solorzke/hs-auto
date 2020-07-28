import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import MissionStatement from '../components/MissionStatement/Statement';
import Footer from '../components/Footer/Footer';
import '../App.css';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Banner />
				<Services />
				<MissionStatement />
				<Footer />
			</div>
		);
	}
}
