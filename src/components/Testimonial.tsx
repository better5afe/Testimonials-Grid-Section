import QuoteIcon from '../assets/icons/QuoteIcon';
import { TestimonialProps } from '../models/interfaces';

import './Testimonial.scss';

const Testimonial: React.FC<TestimonialProps> = ({
	id,
	avatar,
	username,
	isVerified,
	introduction,
	comment,
}) => {
	return (
		<div id={id.toString()} className={`testimonial testimonial--${id}`}>
			{id === 1 && <QuoteIcon className='testimonial__icon' />}
			<div className='testimonial__top'>
				<div className='testimonial__user'>
					<img
						src={avatar}
						alt='Avatar of the user'
						className={`testimonial__user-avatar testimonial__user-avatar--${id}`}
					/>
					<div className='testimonial__user-info'>
						<p className='testimonial__user-info--username'>{username}</p>
						<p className='testimonial__user-info--verification'>
							{isVerified ? 'Verified Graduate' : 'Unvefiried Graduate'}
						</p>
					</div>
				</div>
				<p className='testimonial__introduction'>{introduction}</p>
			</div>
			<p className='testimonial__content'>"&nbsp;{comment}&nbsp;"</p>
		</div>
	);
};

export default Testimonial;
