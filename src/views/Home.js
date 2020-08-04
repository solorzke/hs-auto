import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import Reviews from '../components/Reviews/Reviews';
import MissionStatement from '../components/MissionStatement/Statement';
import Footer from '../components/Footer/Footer';
import Contact from '../components/ContactUs/Contact';
import '../App.css';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Banner />
				<Services />
				<Reviews />
				<MissionStatement />
				<Contact />
				<Footer />
			</div>
		);
	}
}
