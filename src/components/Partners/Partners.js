import React from 'react';
import './Partners.css';
import AutoZone from './auto-zone.jpg';
import AAP from './aap.svg';
import PartsAuthority from './parts-authority.jpg';
import WilsonAuto from './wilson-auto-parts.jpg';
import Partner from './Partner';

export default function Partners() {
	return (
		<div className="partners-container">
			<h1 className="partners-heading">Our Partners</h1>
			<div className="partners-row">
				<Partner link="https://www.autozone.com/" img={AutoZone} alt="Auto Zone" />
				<Partner link="https://shop.advanceautoparts.com/" img={AAP} alt="Advance Auto Parts" />
				<Partner link="https://partsauthority.com/" img={PartsAuthority} alt="Parts Authority" />
				<Partner
					link="http://www.autopartsstoresusa.com/newjerseyautopartstores.htm"
					img={WilsonAuto}
					alt="Wilson Auto"
				/>
			</div>
			<p className="partners-paragraph">
				We are partnered with some of the best auto parts suppliers in the Garden State whose affordable prices
				and quality products help us provide you with the best in the industry while giving you a quality
				service.
			</p>
		</div>
	);
}
