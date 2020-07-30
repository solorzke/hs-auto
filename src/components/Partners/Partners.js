import React from 'react';
import './Partners.css';
import AutoZone from './auto-zone.jpg';
import AAP from './aap.svg';
import PartsAuthority from './parts-authority.jpg';
import WilsonAuto from './wilson-auto-parts.jpg';

export default function Partners() {
	return (
		<div className="partners-container">
			<h1 className="partners-heading">Our Partners</h1>
			<div className="partners-row">
				<a href="https://www.autozone.com/" target="_blank" rel="noopener">
					<img src={AutoZone} height="100" width="300" />
				</a>
				<a href="https://shop.advanceautoparts.com/" target="_blank" rel="noopener">
					<img src={AAP} height="100" width="400" />
				</a>
				<a href="https://partsauthority.com/" target="_blank" rel="noopener">
					<img src={PartsAuthority} height="100" width="300" />
				</a>
				<a href="http://www.autopartsstoresusa.com/newjerseyautopartstores.htm" target="_blank" rel="noopener">
					<img src={WilsonAuto} height="100" width="250" />
				</a>
			</div>
			<p className="partners-paragraph">
				We are partnered with some of the best auto parts suppliers in the Garden State whose affordable prices
				and quality products help us provide you with the best in the industry while giving you a quality
				service.
			</p>
		</div>
	);
}
