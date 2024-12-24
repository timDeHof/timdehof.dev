import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera, Float } from "@react-three/drei";

import HackerRoom from "../_components/HackerRoom";
import Target from "../_components/Target";
import ReactLogo from "../_components/ReactLogo";
import Cube from "../_components/Cube";
import Rings from "../_components/Rings";
import CanvasLoader from "../_components/CanvasLoader";
import HeroCamera from "../_components/HeroCamera";
import Button from "../_components/Button";

const Hero = () => {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	// Adjusted positions based on screen size
	const getPositions = () => {
		if (isMobile) {
			return {
				deskPosition: [0, -1, 0],
				deskScale: 0.045,
				targetPosition: [-1.2, 0.8, 1],
				reactLogoPosition: [1.2, 0.8, 1],
				ringPosition: [1.2, -0.8, 1],
				cubePosition: [-1.2, -0.8, 1],
				cameraPosition: [0, 0, 10],
			};
		}
		if (isTablet) {
			return {
				deskPosition: [0, -1.2, 0],
				deskScale: 0.055,
				targetPosition: [-1.8, 1.2, 1.5],
				reactLogoPosition: [1.8, 1.2, 1.5],
				ringPosition: [1.8, -1.2, 1.5],
				cubePosition: [-1.8, -1.2, 1.5],
				cameraPosition: [0, 0, 13],
			};
		}
		// Desktop default
		return {
			deskPosition: [0, -3.5, 0],
			deskScale: 0.06,
			targetPosition: [-8, 1.5, 1.25],
			reactLogoPosition: [7.5, 1.5, 1.8],
			ringPosition: [16.5, -10.5, 1.8],
			cubePosition: [-7.5, -5.5, 1.8],
			cameraPosition: [0, 0, 16],
		};
	};

	const positions = getPositions();

	return (
		<section className='relative flex flex-col w-full h-screen' id='home'>
			<div className='flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space'>
				<p className='text-2xl font-medium text-center text-white sm:text-3xl font-generalsans'>
					Hi, I am Tim DeHof <span className='waving-hand'>👋🏻</span>
				</p>
				<p className='hero_tag text-gray_gradient'>Building Products & Tools</p>
			</div>
			<div className='absolute inset-0 w-full h-full'>
				<Canvas className='w-full h-full'>
					<Suspense fallback={<CanvasLoader />}>
						<Leva hidden />
						<PerspectiveCamera
							makeDefault
							position={positions.cameraPosition}
							fov={50}
						/>
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								position={positions.deskPosition}
								rotation={[0.2, -Math.PI, 0]}
								scale={positions.deskScale}
							/>
						</HeroCamera>
						<group>
							<Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.2}>
								<Target
									position={positions.targetPosition}
									rotation={[0, 0, 0]}
									scale={isSmall ? 0.8 : 1}
								/>
							</Float>

							<Float speed={0.7} rotationIntensity={0.1} floatIntensity={0.15}>
								<ReactLogo
									position={positions.reactLogoPosition}
									rotation={[0, 0, 0]}
									scale={isSmall ? 0.35 : 0.5}
								/>
							</Float>

							<Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.25}>
								<Rings
									position={positions.ringPosition}
									rotation={[0, 0, 0]}
									scale={isSmall ? 0.8 : 1}
								/>
							</Float>

							<Float speed={0.75} rotationIntensity={0.08} floatIntensity={0.2}>
								<Cube
									position={positions.cubePosition}
									rotation={[0, 0, 0]}
									scale={isSmall ? 0.8 : 1}
								/>
							</Float>
						</group>

						<ambientLight intensity={0.2} />
						<directionalLight position={[3, 3, 3]} intensity={1.2} castShadow />
						<directionalLight position={[-3, -3, -3]} intensity={0.4} />
						<pointLight position={[0, 2, 1]} intensity={0.6} color='#ffffff' />
					</Suspense>
				</Canvas>
			</div>
			<div className='absolute left-0 right-0 z-10 w-full bottom-7 c-space'>
				<a href='#about' className='w-fit'>
					<Button
						name="Let's work together"
						isBeam
						containerClass='sm:w-fit w-full sm:min-w-96'
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
