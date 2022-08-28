import React from "react";
import "./About.css";
import Phone2 from "../../Images/Phone2.png";
import Power from "../../Images/Power.png";

const About = () => {
	return (
		<div className="about">
			<div>
				<img class="phone" src={Phone2} alt="Image of a phone" />
			</div>
			<div>
				{/* <img src={Power} alt="" className="powerimg" /> */}
				<h3>Text Goes Here</h3>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit.
				</p>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit.Lorem ipsum dolor
					sit amet consect
				</p>
				<button>Press Me</button>
			</div>
		</div>
	);
};

export default About;
