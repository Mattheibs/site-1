import React from "react";
import "./Panel.css";
import Star from "../../Images/Star.png";

const Panel = () => {
	return (
		<div className="panel">
			<div className="topsec">
				<h3>Text Goes Here</h3>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit. Lorem ipsum dolor
					sit amet consect
				</p>
			</div>
			<div className="panels">
				<div className="panel">
					<h3>Text Goes Here</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit.Lorem
						ipsum dolor sit amet consectetur adipiscing elit
						Ut et massa
					</p>
					<button>Click Here</button>
				</div>
				<div className="panel pmiddle">
					<h3>Text Goes Here</h3>
					<p>
						Lorem ipsum dolor sit amet consect etur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit. Lorem
						ipsum dolor sit amet consectLorem ipsum dolor sit
						amet consectetur adipiscing elit Ut et massa mi.
						Aliquam in hendrerit.
					</p>
					<p>
						etur adipiscing elit Ut et massa mi. Aliquam in
						hendrerit.Lorem ipsum dolor sit amet consectLorem
						ipsum dolor sit amet consectetur adipiscing elit
						Ut et massa mi. Aliquam in hendrerit.
					</p>
					<button>Click Here</button>
				</div>
				<div className="panel">
					<h3>Text Goes Here</h3>
					<p>
						Lorem ipsum dolor sit amet consectLorem ipsum
						dolor sit amet consectetur adipiscing elit Ut et
						massa mi. Aliquam in hendrerit.
					</p>
					<button>Click Here</button>
				</div>
			</div>
		</div>
	);
};

export default Panel;
