import { useContext } from "react";
import { Context } from '../context/AppContext';

const NavList = () => {
	const {navigation} = useContext(Context)

	return (
		<>
			{navigation.map(item => (
				<a 
					key={item.name}
					href={item.href}
					className="text-base font-semibold text-gray-900"
					>
						{item.name}
				</a>
			))}
		</>
	)
};

export default NavList;