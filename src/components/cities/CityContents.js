import { BsStopwatch } from 'react-icons/bs';
import Facilities from './Facilities';
const CityContents = ({ name, duration, price, room, food }) => {
	const formate = (price) => {
		return `${price}.00`;
	};
	return (
		<div className='cities__body__contents'>
			<div className='cities__body__contents__top'>
				<div className='cities__body__contents__top__name'>{name}</div>
				<div className='cities__body__contents__top__duration'>
					<BsStopwatch size={18} color='#df2189' />
					<div className='cities__body__contents__top__duration__time'>
						{duration}
					</div>
				</div>
			</div>
			<div className='cities__body__contents__price'>
				<span className='cities__body__contents__price__dollor'>$</span>
				{formate(price)}
			</div>
			<Facilities name='room' value={room} />
			<Facilities name='food' value={food} />
			<div className='cities__body__contents__button'>
				<button className='btn-dark-sm'>buy now</button>
			</div>
		</div>
	);
};
export default CityContents;
