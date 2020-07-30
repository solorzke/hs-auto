import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Article from '../components/Article/Article';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';

export default function About() {
	return (
		<div>
			<Navbar />
			<Banner title={'About Us'} subtitle={'Learn more about who we are at HS Auto & Trucking Services'} />
			<Article />
			<Partners />
			<Footer />
		</div>
	);
}
