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

	useEffect(() => {
		setIsLoading(true);

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
