import {Bars3Icon} from '@heroicons/react/24/outline';
import { Context } from '../context/AppContext';
import { useContext } from 'react';

const MenuButtonMobile = () => {

	const {setMobileMenuOpen} = useContext(Context);

	return (
		<button
			onClick={() => setMobileMenuOpen(true)}
			type="button"
			className="inline-flex items-center justify-center p-2.5 text-gray-700"
			>
			<Bars3Icon className='h-6 w-6'/>
		</button>
	)

};

export default MenuButtonMobile;