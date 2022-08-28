import React from "react";
import Phone1 from "../../Images/Phone1.png";
import Phone1img from "../../Images/Phone1img.png";
import "./Showcase.css";

const Showcase = () => {
	return (
		<div className="showcase">
			<div>
				<p>
					Heading Goes <br />
					Here
				</p>
			</div>

			<img src={Phone1} alt="Image of a Phone" />
			<div>
				<img src={Phone1img} alt="Image of Light Quality" />
			</div>
		</div>
	);
};

export default Showcase;
