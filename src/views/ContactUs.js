import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import ContactUs from '../components/ContactUs/Contact';
import Footer from '../components/Footer/Footer';
import '../App.css';

export default function Contact() {
	return (
		<div>
			<Navbar />
			<Banner
				title={'Contact Us'}
				subtitle={'Learn more about our office hours, availability, and ways to contact us.'}
			/>
			<ContactUs />
			<Footer />
		</div>
	);
}
