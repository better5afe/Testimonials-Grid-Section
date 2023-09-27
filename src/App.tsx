import { useEffect, useState } from 'react';
import TestimonialsList from './components/TestimonialsList';
import { TestimonialObject } from './models/interfaces';

import './App.scss';

const App = () => {
	const [testimonials, setTestimonials] = useState<TestimonialObject[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchJobs = async () => {
			setIsLoading(true);
			setError(false);

			try {
				const response = await fetch(
					'https://testimonials-section-fdc68-default-rtdb.asia-southeast1.firebasedatabase.app/testimonials.json'
				);

				if (!response.ok) {
					setIsLoading(false);
					setError(true);
					return;
				}

				const data = await response.json();
				console.log(data);
				setIsLoading(false);
				setTestimonials(data);
			} catch (error) {
				setIsLoading(false);
				setError(true);
			}
		};

		fetchJobs();
	}, []);

	return (
		<main className='main'>
			<TestimonialsList data={testimonials} isLoading={isLoading} />
		</main>
	);
};

export default App;
