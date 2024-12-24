import React, { Suspense, lazy } from "react";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import LoadingSpinner from "./_components/LoadingSpinner";

// Lazy load heavier _sections

const About = lazy(() => import("./_sections/about"));
const Projects = lazy(() => import("./_sections/projects"));
const Testimonials = lazy(() => import("./_sections/testimontials"));
const WorkExperience = lazy(() => import("./_sections/experience"));
const Contact = lazy(() => import("./_sections/contact"));
const Footer = lazy(() => import("./_sections/footer"));
const App = () => {
	return (
		<main className='container relative mx-auto'>
			<Navbar />
			<Hero />
			<Suspense fallback={<LoadingSpinner />}>
				<About />
				<Projects />
			</Suspense>
			<Suspense fallback={<LoadingSpinner />}>
				<Testimonials />
				<WorkExperience />
			</Suspense>
			<Suspense fallback={<LoadingSpinner />}>
				<Contact />
				<Footer />
			</Suspense>
			{/* <Skills /> */}
		</main>
	);
};

export default App;
