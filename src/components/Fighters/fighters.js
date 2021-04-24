import React from "react";
import "fighters.css";

class Fighters extends React.Component {
	constructor() {
		super();
		this.state = { fighters: [] };
	}

	render() {
		return <FightersList />;
	}
}

export default Fighters;
