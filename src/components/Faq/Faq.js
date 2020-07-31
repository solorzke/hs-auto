import React from 'react';
import './Faq.css';
import { Questions } from './Questions';

export default function Faq() {
	return (
		<div className="faq-container">
			{Questions.map((item, index) => {
				return (
					<div className="question-box" key={index}>
						<h1 className="question">{item.question}</h1>
						<p className="answer">{item.answer}</p>
					</div>
				);
			})}
		</div>
	);
}
