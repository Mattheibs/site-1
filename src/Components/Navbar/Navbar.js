import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import hamburger from "../../Images/Hamburger.png";

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<header className="navbar">
			<nav>
				<ul className="hiddenmenu">
					<li
						className="hamburger-menu-icon hiddenmenu"
						onClick={() => setIsClicked(!isClicked)}
					>
						<img src={hamburger} alt="Buger Menu Image" />
					</li>
				</ul>
			</nav>
			{isClicked && (
				<div className="menu">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/AboutUs">About Us</Link>
						</li>
						<li>
							<a href="/#contact">Contact Us</a>
						</li>
						<li>
							<Link to="/Blog">Blog</Link>
						</li>
					</ul>
				</div>
			)}
			<div className="mainmenu">
				<ul>
					<li>
						<NavLink to="/" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/AboutUs" activeClassName="active">
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to="/Blog" activeClassName="active">
							Blog
						</NavLink>
					</li>
					<li>
						<a href="/#contact" activeClassName="active">
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
