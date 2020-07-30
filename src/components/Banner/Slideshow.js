import React from 'react';
import Image1 from './Images/img1.jpg';
import Image2 from './Images/img2.png';
import Image3 from './Images/img3.png';
import Battery from '../Article/Battery.jpg';
import Installation from '../Article/Installation.jpg';
import Repair from '../Article/Repair.jpg';
import Tow from '../Article/Tow.jpg';
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
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Battery})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Installation})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Repair})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${Tow})` }} />
				</div>
			</Slide>
		</div>
	);
}
