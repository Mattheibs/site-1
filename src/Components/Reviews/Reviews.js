import React from "react";
import "./Reviews.css";
import Star from "../../Images/Star.png";

const Reviews = () => {
	return (
		<div className="reviews">
			<div className="banner">
				<div className="review r1">
					<div className="stars">
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
					</div>
					<div className="revhead">
						<div className="circle"></div>
						<h3>Text Goes Here</h3>
					</div>

					<p>
						Lorem ipsum dolor sit amet consect etur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit. Lorem
						ipsum dolor sit a
					</p>
				</div>
				<div className="review r2">
					<div className="stars">
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
					</div>
					<div className="revhead">
						<div className="circle"></div>
						<h3>Text Goes Here</h3>
					</div>
					<p>
						Lorem ipsum dolor sit amet consect etur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit.
					</p>
					<p>
						Lorem ipsum dolor sit amet consect etur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit.Lorem
						ipsum dolor sit amet consect
					</p>
				</div>
				<div className="review r3">
					<div className="stars">
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
						<img src={Star} alt="Image of a Star" />
					</div>
					<div className="revhead">
						<div className="circle"></div>
						<h3>Text Goes Here</h3>
					</div>
					<p>
						Lorem ipsum dolor sit amet consect etur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit. Lorem
						ipsum dolor sit a
					</p>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
