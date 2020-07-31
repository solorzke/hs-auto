import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Contact() {
	return (
		<div>
			<div className="contact-container">
				<div className="info-container">
					<h1 className="contact-title">Contact Us</h1>
					<p>
						<i className="fa fa-phone-square" />
						551-580-7286
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
					<a href="#" rel="noopener" target="_blank">
						<i className="fa fa-facebook-official" />
					</a>
					<a href="#" rel="noopener" target="_blank">
						<i className="fa fa-envelope" />
					</a>
				</div>
			</div>
			<div className="maps-container">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.9699476669!2d-74.25983737353037!3d40.75998337932602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2543f1b51e8d9%3A0xe5339b4d44d66c4b!2sH%20%26%20S%20Auto%20%26%20Truck%20Services!5e0!3m2!1sen!2sus!4v1596148708178!5m2!1sen!2sus"
					width="100%"
					height="450"
					frameborder="0"
					style={{ border: 0, padding: 10 }}
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				/>
			</div>
		</div>
	);
}
