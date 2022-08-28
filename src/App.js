import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Blog from "./Routes/Blog";
import AboutUs from "./Routes/AboutUs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/Blog" element={<Blog />} />
				<Route exact path="/AboutUs" element={<AboutUs />} />
			</Routes>
		</div>
	);
}

export default App;
