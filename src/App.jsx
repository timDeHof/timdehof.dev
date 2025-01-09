import React, { Suspense, lazy } from "react";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import LoadingSpinner from "./_components/LoadingSpinner";

// Lazy load sections with proper error handling
const About = lazy(() =>
	import("./_sections/about").catch(err => {
		console.error("Error loading About section:", err)
		return { default: () => <div>Error loading About section</div> }
	})
)

const Projects = lazy(() =>
	import("./_sections/projects").catch(err => {
		console.error("Error loading Projects section:", err)
		return { default: () => <div>Error loading Projects section</div> }
	})
)

const Testimonials = lazy(() =>
	import("./_sections/testimontials").catch(err => {
		console.error("Error loading Testimonials section:", err)
		return { default: () => <div>Error loading Testimonials section</div> }
	})
)

const WorkExperience = lazy(() =>
	import("./_sections/experience").catch(err => {
		console.error("Error loading WorkExperience section:", err)
		return { default: () => <div>Error loading Work Experience section</div> }
	})
)

const Contact = lazy(() =>
	import("./_sections/contact").catch(err => {
		console.error("Error loading Contact section:", err)
		return { default: () => <div>Error loading Contact section</div> }
	})
)

const Footer = lazy(() =>
	import("./_sections/footer").catch(err => {
		console.error("Error loading Footer section:", err)
		return { default: () => <div>Error loading Footer section</div> }
	})
)

function App() {
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
		</main>
	);
}

export default App;
