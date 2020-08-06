import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';
import Maps from '../Maps/Maps';

export default function Contact() {
	return (
		<div>
			<div className="contact-container">
				<div className="info-container">
					<h1 className="contact-title">Contact Us</h1>
					<p>
						<i className="fa fa-phone-square" />
						(551)-580-7286
					</p>
					<p>
						<i className="fa fa-envelope" />
						helmersolano@gmail.com
					</p>
					<p>
						<i className="fa fa-clock-o" />
						Mon-Sat 8am - 6pm
					</p>
					<p>
						<i className="fa fa-map-marker" />
						250 Davis Ave, Kearny, NJ 07032
					</p>
				</div>
				<div className="social-media-container">
					<a href="www.facebook.com" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-facebook-official" />
					</a>
					<a href="mailto:email@email.com" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-envelope" />
					</a>
				</div>
			</div>
			<div className="maps-container">
				<Maps width={'100%'} height={450} />
			</div>
		</div>
	);
}
