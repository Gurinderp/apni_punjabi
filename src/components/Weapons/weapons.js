import React from "react";
import "weapons.css";

class Weapons extends React.Component {
	constructor() {
		super();
		this.state = { weapons: [] };
	}

	render() {
		return <WeaponsList />;
	}
}

export default Weapons;
