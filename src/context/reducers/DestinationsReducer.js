import { DETAILS, CITIES } from '../types/DestinationTypes';
const DestinationsReducer = (state, action) => {
	const { type, payload } = action;
	console.log(typeof payload);
	if (type === DETAILS) {
		const destination = state.destinations.find(
			(destination) => destination.id === parseInt(payload)
		);
		return {
			...state,
			details: destination,
		};
	} else if (type === CITIES) {
		const filtered = state.cities.filter(
			(city) => parseInt(city.destinationId) === parseInt(payload)
		);
		return {
			...state,
			filteredCities: filtered,
		};
	} else {
		return state;
	}
};
export default DestinationsReducer;
