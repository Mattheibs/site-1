import React from "react";
import "./Tile.css";
import House from "../../Images/House.png";
import Chart from "../../Images/Chart.png";
import Diagram from "../../Images/Diagram.png";

const Tile = () => {
	return (
		<div className="tiles">
			<div className="tile t1">
				<img src={House} alt="House Icon" />
				<h3>Heading 1</h3>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit.
				</p>
			</div>
			<div className="tile t2">
				<img src={Chart} alt="Chart Icon" />
				<h3>Heading 2</h3>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit.
				</p>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit.Lorem ipsum dolor
					sit amet consect
				</p>
			</div>
			<div className="tile t3">
				<img src={Diagram} alt="Diagram Icon" />
				<h3>Heading 3</h3>
				<p>
					Lorem ipsum dolor sit amet consect etur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit. elit Ut et massa
					mi. Aliquam in hendrerit.
				</p>
			</div>
		</div>
	);
};

export default Tile;
