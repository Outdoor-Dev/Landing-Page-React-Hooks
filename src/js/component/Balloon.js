import React from "react";

export const Balloon = () => {
	return (
		<>
			<img
				className="balloon"
				src="https://extrevity.com/wp-content/uploads/2015/09/hot-air-balloons-together-in-the-sky.jpg"
			/>
			<form action="http://orlandohotairballoon.com/" target="_blank">
				<button className="balloonButton" type="submit">
					Hot Air Balloons
				</button>
			</form>
		</>
	);
};
