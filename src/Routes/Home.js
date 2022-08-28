import React from "react";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Panel from "../Components/Panel/Panel";
import Reviews from "../Components/Reviews/Reviews";
import Showcase from "../Components/Showcase/Showcase";
import Tile from "../Components/Tile/Tile";
import Tile2 from "../Components/Tile2/Tile2";

function Home() {
	return (
		<div>
			<Showcase />
			<Tile />
			<Tile2 />
			<About />
			<Reviews />
			<Panel />
			<Footer />
		</div>
	);
}

export default Home;
