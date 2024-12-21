import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
				<Navbar />
				<Hero />
				<Tech />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
