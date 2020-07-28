import React from 'react';
import './Footer.css';

export default function Copyright(props) {
	return (
		<div className="copyright-container">
			<p>&copy; {props.year} HS Auto &amp; Trucking Services. All rights reserved </p>
		</div>
	);
}
