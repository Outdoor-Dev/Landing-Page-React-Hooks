import React, { useState } from "react";
import { Cover } from "./Cover";
import { Wynwood } from "./Wynwood";
import { Balloon } from "./Balloon";
import { Snorkel } from "./Snorkel";
import { Everglades } from "./Everglades";

export const Miami = () => {
	const [x, setX] = useState(0);
	let miamiArr = [
		<Cover key={1} />,
		<Wynwood key={2} />,
		<Snorkel key={3} />,
		<Balloon key={4} />,
		<Everglades key={5} />
	];

	const goLeft = () => {
		x === 0 ? setX(-100 * (miamiArr.length - 1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (miamiArr.length - 1) ? setX(0) : setX(x - 100);
	};
	return (
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
	);
};
