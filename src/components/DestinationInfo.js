import DestinationDetails from './DestinationDetails';
const DestinationInfo = ({ details }) => {
	return (
		<div className='destinationInfo'>
			<div className='container'>
				<h2 className='heading headingAnimation'>Overview</h2>
				<div className='row'>
					<div className='col-8'>
						<p className='destinationInfo__p animation'>{details.details}</p>
					</div>
				</div>
				<h2 className='heading headingAnimation'>Good to know</h2>
				<div className='row'>
					<div className='col-8'>
						<DestinationDetails title='Language' text={details.language} />
						<DestinationDetails title='Currency' text={details.currency} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default DestinationInfo;
