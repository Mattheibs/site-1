import React from "react";
import "./Tile2.css";
import Power from "../../Images/Power.png";
import Circles from "../../Images/Circles2.png";
import Temp from "../../Images/Temp.png";
import Graph from "../../Images/Graph.png";

const Tile = () => {
	return (
		<div className="tile2">
			<div className="lefttile">
				<img src={Power} alt="Power Icon" />
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
				<p>Read More</p>
			</div>

			<div className="boxes">
				<div className="box1">
					<img src={Temp} alt="" />
				</div>
				<img
					src={Circles}
					alt="Background Circles"
					className="circle"
				/>
				<div className="box2"></div>
				<div className="box3"></div>
			</div>
			<div style={{ position: "relative" }}>
				<div className="boxes right-box">
					<img src={Graph} alt="Image of graph" />
				</div>
			</div>
		</div>
	);
};

export default Tile;
