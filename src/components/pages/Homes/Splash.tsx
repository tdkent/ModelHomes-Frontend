export default function Splash() {
	return (
		<>
			<div className="w-full lg:drop-shadow-xl lg:drop-shadow-blue-300">
				<div className="w-full h-lvh bg-[url(/img/ggie-ti-postcard@1280.jpeg)] bg-position-[35%_center] bg-no-repeat bg-cover lg:aspect-video lg:h-auto clip-img xl:aspect-2/1">
					<div className="w-full h-full backdrop-blur-[2px] lg:backdrop-blur-xs">
						<h1 className="relative bg-linear-to-r from-yellow-100 to-blue-200 bg-clip-text text-transparent text-[44px] font-sans font-bold leading-12 opacity-90 top-28 px-4 max-w-120 sm:px-8 sm:text-6xl sm:top-36 sm:leading-16 md:text-[82px] md:leading-20 sm:max-w-full md:px-10 md:top-40 lg:text-6xl lg:leading-16 xl:text-[82px] xl:leading-20 xl:px-20 2xl:text-8xl 2xl:leading-24">
							Model Homes{" "}
							<span className="text-3xl block my-2 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
								of the
							</span>{" "}
							Golden Gate <span className="block">International</span>{" "}
							<span className="block">Exposition</span>
							<span className="text-3xl block mt-4 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
								1939-40
							</span>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
