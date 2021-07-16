import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
const NotFound = () => {
	const [state] = useState({
		heading: 'Oops, 404',
		paragraph: 'Sorry, the page you are looking for does not exist.',
		image: '/assets/images/404.jpg',
	});
	return (
		<>
			<Helmet>
				<title>Not found</title>
				<meta name='description' content='travel friends not found page' />
			</Helmet>
			<Header
				heading={state.heading}
				paragraph={state.paragraph}
				image={state.image}>
				<Link to='/' className='btn-default'>
					go to home
				</Link>
			</Header>
		</>
	);
};
export default NotFound;
