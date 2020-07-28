import React from 'react';
import Image1 from './Images/img1.jpg';
import Image2 from './Images/img2.png';
import Image3 from './Images/img3.png';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

export default function Slideshow() {
	return (
		<div className="slide-container">
			<Slide arrows={false} indicators={true}>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Image1})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Image2})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Image3})` }} />
				</div>
			</Slide>
		</div>
	);
}
