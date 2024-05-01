import Announce from "./Announce";

const MainContent = () => {

	return (

		<section className="mt-52 lg:mt-72 flex flex-col items-center">
			<div className="max-w-2xl flex flex-col items-center text-center gap-10 px-8">
				<Announce />
				<h1 className="text-6xl font-bold tracking-tight text-gray-950">Data to enrich your online business</h1>
				<p className="text-lg leading-8 text-gray-600">
					Molestias repudiandae et, vitae officiis, magnam consequuntur ipsum earum, dignissimos soluta eos obcaecati aliquid doloremque nostrum voluptatum maiores.
				</p>
				<div className="flex gap-x-4 py-8 sm:p-0">
					<a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white">Get started</a>
					<a href="/" className="px-3.5 py-2 flex gap-x-4 items-center text-base font-semibold text-gray-900">
						<span>Learn more</span>
						<span className='font-bold'>&rarr;</span>
					</a>
				</div>
			</div>
		</section>
	)
};

export default MainContent;