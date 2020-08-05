import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Sitemap from '../components/Maps/Site';
import Footer from '../components/Footer/Footer';

export default function Site() {
	return (
		<div>
			<Navbar />
			<Banner />
			<Sitemap />
			<Footer />
		</div>
	);
}
