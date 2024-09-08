import React from "react";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import About from "./_sections/about";
import Projects from "./_sections/projects";
import Testimontials from "./_sections/testimontials";
import Contact from "./_sections/contact";

const App = () => {
	return (
		<main className='container relative mx-auto'>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Testimontials />
			<Contact />
		</main>
	);
};

export default App;
