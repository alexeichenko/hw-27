import { createContext, useState } from "react";

import {
	ArrowPathIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from '@heroicons/react/24/outline';

import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

export const Context = createContext(null);

const AppContext = ({ children }) => {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<Context.Provider
			value={{
				mobileMenuOpen,
				setMobileMenuOpen,
				navigation: [
					{ name: "Product", href: "#" },
					{ name: "Features", href: "#" },
					{ name: "Marketplace", href: "#" },
					{ name: "Company", href: "#" },
				],
				solutions: [
					{ name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
					{ name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
					{ name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
					{ name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
					{ name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
				],
				callsToAction: [
					{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
					{ name: 'Contact sales', href: '#', icon: PhoneIcon },
				]
			}}>
			{children}
		</Context.Provider>
	)

}

export default AppContext;