import React from 'react';
import '../App.css';
import Faq from '../components/Faq/Faq';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

export default function HelpCenter() {
	return (
		<div>
			<Navbar />
			<Banner
				title={'Help Center'}
				subtitle={'Welcome to our help center where we answer any questions you may have.'}
			/>
			<Faq />
			<Footer />
		</div>
	);
}
