import { useReducer } from 'react';
import DestinationsContext from '../DestinationsContext';
import DestinationsReducer from '../reducers/DestinationsReducer';
import { destinations } from '../../data/destinations';
import Cities from '../../data/cities';

const DestinationsProvider = (props) => {
	const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
		destinations,
		details: {},
		cities: Cities,
		filteredCities: [],
	});
	return (
		<DestinationsContext.Provider value={{ destinationsData, dispatch }}>
			{props.children}
		</DestinationsContext.Provider>
	);
};
export default DestinationsProvider;
