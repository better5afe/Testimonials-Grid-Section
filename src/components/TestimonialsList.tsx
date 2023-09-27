import Testimonial from './Testimonial';
import { TestimonialsListProps } from '../models/interfaces';

import './TestimonialsList.scss';

const TestimonialsList: React.FC<TestimonialsListProps> = ({
	data,
}) => {
	return (
		<section className='testimonials'>
			{data.map((data) => (
				<Testimonial
					key={data.id}
					id={data.id}
					avatar={data.avatar}
					username={data.username}
					isVerified={data.isVerified}
					introduction={data.introduction}
					comment={data.comment}
				/>
			))}
		</section>
	);
};

export default TestimonialsList;
