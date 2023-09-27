import { useEffect, useState } from 'react';
import TestimonialsList from './components/TestimonialsList';
import Loader from './components/Loader';
import { TestimonialObject } from './models/interfaces';

import './App.scss';

const App = () => {
	const [testimonials, setTestimonials] = useState<TestimonialObject[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({
		isError: false,
		errorMsg: '',
	});

	const reveal = () => {
		const thirdTestimonial= document.getElementById('3');
		const fourthTestimonial = document.getElementById('4');
		const fifthTestimonial = document.getElementById('5');

		let testimonials = [thirdTestimonial, fourthTestimonial, fifthTestimonial];
		for (let i = 0; i < testimonials.length; i++) {
			let windowHeight = window.innerHeight;
			let elementTop = testimonials[i]!.getBoundingClientRect().top;
			let elementVisible = 150;
			if (elementTop < windowHeight - elementVisible) {
				testimonials[i]!.classList.add('visible');
			} 
		}
	};

	useEffect(() => {
		setIsLoading(true);

		window.addEventListener('scroll', reveal);

		setTimeout(() => {
			const fetchTestimonials = async () => {
				try {
					const response = await fetch(
						'https://testimonials-section-fdc68-default-rtdb.asia-southeast1.firebasedatabase.app/testimonials.json'
					);
					if (!response.ok) {
						setIsLoading(false);
						setError({
							isError: true,
							errorMsg: 'Something went wrong. Please try again later.',
						});
						return;
					}
					const data = await response.json();
					console.log(data);

					setIsLoading(false);
					setTestimonials(data);
				} catch (error) {
					setIsLoading(false);
					setError({
						isError: true,
						errorMsg: 'Something went wrong. Please try again later.',
					});
				}
			};

			fetchTestimonials();
		}, 1000);
	}, []);

	return (
		<main className='main'>
			{isLoading && <Loader />}
			{!isLoading && error.isError && (
				<p className='main__error'>{error.errorMsg}</p>
			)}
			{!isLoading && !error.isError && <TestimonialsList data={testimonials} />}
		</main>
	);
};

export default App;
