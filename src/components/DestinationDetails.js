const DestinationDetails = ({ title, text }) => {
	return (
		<div className='destinationInfo__details'>
			<div className='destinationInfo__details__head animation'>{title}</div>
			<div className='destinationInfo__details__text animation'>{text}</div>
		</div>
	);
};
export default DestinationDetails;
