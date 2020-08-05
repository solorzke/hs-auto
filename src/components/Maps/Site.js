import React from 'react';
import { Link } from 'react-router-dom';
import './Site.css';

export default function Sitemap() {
	return (
		<div className="site-map-container">
			<Link className="sitemap-item" to="/">
				Home
			</Link>
			<Link className="sitemap-item" to="/about">
				About Us
			</Link>
			<Link className="sitemap-item" to="/services">
				Services
			</Link>
			<Link className="sitemap-item" to="/contact">
				Contact Us
			</Link>
			<Link className="sitemap-item" to="/help">
				Help Center
			</Link>
		</div>
	);
}
