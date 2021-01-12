import React, { useState } from "react";
import { Cover } from "./Cover";
import { Wynwood } from "./Wynwood";
import { Watersports } from "./Watersports";
import { NightLife } from "./NightLife";
import { Everglades } from "./Everglades";
import { Navbar } from "./Navbar";

export const Miami = () => {
	const [x, setX] = useState(0);
	let miamiArr = [
		<Cover key={1} className="what" />,
		<Wynwood key={2} />,
		<Watersports key={4} />,
		<NightLife key={3} />,

		<Everglades key={5} />,

		<NightLife key={3} />
	];

	const goLeft = () => {
		x === 0 ? setX(-100 * (miamiArr.length - 1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (miamiArr.length - 1) ? setX(0) : setX(x - 100);
	};
	return (
		<>
			<Navbar />
			<div className="miami">
				{miamiArr.map((item, i) => {
					return (
						<div
							key={i}
							className="arr"
							style={{ transform: `translateX(${x}%)` }}>
							{" "}
							{item}{" "}
						</div>
					);
				})}

				<button className="leftButton" onClick={goLeft}>
					<i className="fas fa-chevron-left" />
				</button>
				<button className="rightButton" onClick={goRight}>
					<i className="fas fa-chevron-right" />
				</button>
			</div>
		</>
	);
};
