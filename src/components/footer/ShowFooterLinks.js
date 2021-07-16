import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
const ShowFooterLinks = ({ links, external }) => {
	return links.map((link) => (
		<ul className='footer__ul animation' key={link.id}>
			<li className='footer__ul__li'>
				{external ? (
					<>
						<BsChevronRight size={12} />
						<a href={link.route} target='_blank'>
							{link.name}
						</a>
					</>
				) : (
					<>
						<BsChevronRight size={12} />
						<Link
							to={
								link.hasOwnProperty('route')
									? link.route
									: `/details/${link.id}`
							}>
							{link.name}
						</Link>
					</>
				)}
			</li>
		</ul>
	));
};
export default ShowFooterLinks;
