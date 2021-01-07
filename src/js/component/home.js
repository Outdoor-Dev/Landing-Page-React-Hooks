import React from "react";
import { Miami } from "./Miami";
import { Cover } from "./Cover";
import { Wynwood } from "./Wynwood";
import { Balloon } from "./Balloon";
import { Snorkel } from "./Snorkel";
import { Everglades } from "./Everglades";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Miami />
		</>
	);
}
