import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Article from '../components/Article/Article';
import { ArticleText } from '../components/Article/Text';
import Footer from '../components/Footer/Footer';

export default function Services() {
	return (
		<div>
			<Navbar />
			<Banner
				title={'Our Services'}
				subtitle={'Learn more about our services and skills at HS Auto & Trucking Services'}
			/>
			<Article
				image={ArticleText[1].autorepair.image}
				title={ArticleText[1].autorepair.title}
				paragraphs={ArticleText[1].autorepair.paragraphs}
			/>
			<Article
				image={ArticleText[1].autobody.image}
				title={ArticleText[1].autobody.title}
				paragraphs={ArticleText[1].autobody.paragraphs}
			/>
			<Article
				image={ArticleText[1].battery.image}
				title={ArticleText[1].battery.title}
				paragraphs={ArticleText[1].battery.paragraphs}
			/>
			<Article
				image={ArticleText[1].emergency.image}
				title={ArticleText[1].emergency.title}
				paragraphs={ArticleText[1].emergency.paragraphs}
			/>
			<Footer />
		</div>
	);
}
