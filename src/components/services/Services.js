import { useState, useContext } from 'react';
import ServicesLeft from './ServicesLeft';
import ServicesList from './ServicesList';
import SharedContext from '../../context/SharedContext';
const Services = () => {
	const {
		sharedData: { servicesData },
	} = useContext(SharedContext);

	const [state] = useState({
		heading:
			'why customers love travel friends? because we provide unique services.',
		subHeading:
			'Our aim is to provide professional and unique services to customers, and we have provided high quality services to our customers thats why they love travel friends.',
	});
	return (
		<div className='services'>
			<div className='services__contents'>
				<div className='container'>
					<div className='row ml-minus-15 mr-minus-15 services__contents__container'>
						<div className='col-6 p-15'>
							<ServicesLeft
								heading={state.heading}
								subHeading={state.subHeading}
							/>
						</div>
						<div className='col-6 p-15'>
							<ServicesList services={servicesData} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Services;
