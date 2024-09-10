import { useState } from "react";
import { Globe } from "../_components/GridGlobe.jsx";

import Button from "../_components/Button.jsx";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("tim@timdehof.dev");
		setHasCopied(true);

		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};

	return (
		<section className='my-20 c-space' id='about'>
			<div className='grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2'>
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='assets/grid1.png'
							alt='grid-1'
							className='w-full sm:h-[276px] h-fit object-contain'
						/>

						<div>
							<p className='grid-headtext'>Hi, I’m Tim DeHof</p>
							<p className='grid-subtext'>
								As a full-stack developer, I have a passion for creating dynamic
								and responsive websites. I am a self-taught developer with a
								strong background in both frontend and backend development.
							</p>
						</div>
					</div>
				</div>

				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='assets/grid2.png'
							alt='grid-2'
							className='w-full sm:h-[276px] h-fit object-contain'
						/>

						<div>
							<p className='grid-headtext'>Tech Stack</p>
							<p className='grid-subtext'>
								I specialize in a variety of languages, frameworks, and tools
								that allow me to build robust and scalable applications
							</p>
						</div>
					</div>
				</div>

				<div className='col-span-1 xl:row-span-4'>
					<div className='grid-container'>
						<div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
							<div className='relative top-0 w-full h-96'>
								<Globe />
							</div>
						</div>
						<div>
							<p className='grid-headtext'>
								I work remotely across most timezones.
							</p>
							<p className='grid-subtext'>
								I&apos;m based in USA and open to remote work worldwide.
							</p>
							<Button name='Contact Me' isBeam containerClass='w-full mt-10' />
						</div>
					</div>
				</div>

				<div className='xl:col-span-2 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='assets/grid3.png'
							alt='grid-3'
							className='w-full sm:h-[266px] h-fit object-contain'
						/>

						<div>
							<p className='grid-headtext'>My Passion for Coding</p>
							<p className='grid-subtext'>
								I love solving problems and building things through code.
								Programming isn&apos;t just my profession—it&apos;s my passion.
								I enjoy exploring new technologies, and enhancing my skills.
							</p>
						</div>
					</div>
				</div>

				<div className='xl:col-span-1 xl:row-span-2'>
					<div className='grid-container'>
						<img
							src='assets/grid4.png'
							alt='grid-4'
							className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
						/>

						<div className='space-y-2'>
							<p className='text-center grid-subtext'>Contact me</p>
							<div className='copy-container' onClick={handleCopy}>
								<img
									src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
									alt='copy'
								/>
								<p className='font-medium text-white lg:text-2xl md:text-xl text-gray_gradient'>
									tim@timdehof.dev
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
