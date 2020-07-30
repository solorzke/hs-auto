import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Article from '../components/Article/Article';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';
import { ArticleText } from '../components/Article/Text';

export default function About() {
	return (
		<div>
			<Navbar />
			<Banner title={'About Us'} subtitle={'Learn more about who we are at HS Auto & Trucking Services'} />
			<Article
				image={ArticleText[0].image}
				height={400}
				width={400}
				paragraphs={ArticleText[0].paragraphs}
				title={ArticleText[0].title}
			/>
			<Partners />
			<Footer />
		</div>
	);
}
