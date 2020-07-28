import React from 'react';
import './Services.css';

export default function Summary() {
	return (
		<div className="summary-container">
			<div className="summary-heading">
				<h2 className="summary-title">Helmer's Auto Repair!</h2>
				<h3 className="summary-subtitle">Take a look at our services.</h3>
			</div>
			<div className="summary-paragraph">
				<p>
					Helmer's Auto Repair is a full service 'A' to 'Z' repair facility. We specialize in foreign and
					domestic mechanics, electrical systems, and autobody work.
				</p>
			</div>
		</div>
	);
}
