import React from "react";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import About from "./_sections/about";
import Projects from "./_sections/projects";
import Testimonials from "./_sections/testimonials";
import Contact from "./_sections/contact";
import Footer from "./_sections/footer";
import Experience from "./_sections/experience";
const App = () => {
	return (
		<main className='container relative mx-auto'>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Testimonials />
			<Experience />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
