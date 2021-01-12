import React from "react";

export const NightLife = () => {
	return (
		<>
			<img
				className="nightlife"
				src="https://d34ojwe46rt1wp.cloudfront.net/wp-content/uploads/2014/11/miami_skyline.jpg"
			/>
			<form
				action="https://www.miamiandbeaches.com/things-to-do/nightlife/south-beach-nightlife"
				target="_blank">
				<button className="nightlifeButton" type="submit">
					Night Life
				</button>
			</form>
		</>
	);
};
