import React from 'react';
import './Reviews.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Star(props) {
	return (
		<div className="stars">
			{[ ...Array(props.stars) ].map((item, index) => <i key={index} className="fa fa-star" />)}
		</div>
	);
}
