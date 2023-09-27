export interface TestimonialObject {
	id: number;
	avatar: string;
	username: string;
	isVerified: boolean;
	introduction: string;
	comment: string;
}

export interface TestimonialsListProps {
	data: TestimonialObject[];
	isLoading: boolean;
}

export interface TestimonialProps {
	id: number;
	avatar: string;
	username: string;
	isVerified: boolean;
	introduction: string;
	comment: string;
	isLoading: boolean;
}

export interface SvgProps {
	className: string
}