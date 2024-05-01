import { useContext } from "react";
import { Context } from "../context/AppContext";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import NavList from "./NavList";
import LoginButton from "./LoginButton";


const NavDialog = () => {

	const { mobileMenuOpen, setMobileMenuOpen } = useContext(Context);

	return (
		<Dialog
			as="div"
			className={"lg:hidden"}
			open={mobileMenuOpen}
			onClose={() => setMobileMenuOpen(false)}
		>

			<Dialog.Panel className={"fixed inset-y-0 right-0 z-50 w-full lg:max-w-sm bg-white p-6 overflow-auto"}>
				<div className="flex items-center justify-between">
					<Logo />
					<button
						type="button"
						onClick={() => setMobileMenuOpen(false)}>
						<XMarkIcon className="h-6 w-6" />
					</button>
				</div>

				<nav className='mt-6 flex flex-col gap-y-24'>
						<div className="space-y-2 flex flex-col">
							<NavList />
						</div>
						<LoginButton showIcon={false}/>
				</nav>
			</Dialog.Panel>

		</Dialog>
	)

};

export default NavDialog;