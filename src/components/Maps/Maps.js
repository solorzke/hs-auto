import React from 'react';

export default function Maps(props) {
	return (
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.9699476669!2d-74.25983737353037!3d40.75998337932602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2543f1b51e8d9%3A0xe5339b4d44d66c4b!2sH%20%26%20S%20Auto%20%26%20Truck%20Services!5e0!3m2!1sen!2sus!4v1596148708178!5m2!1sen!2sus"
			width={props.width}
			height={props.height}
			frameborder="0"
			style={{ border: 0, padding: 10 }}
			allowfullscreen=""
			aria-hidden="false"
			tabindex="0"
		/>
	);
}
