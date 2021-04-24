const mongoose = require("mongoose");

const weaponScehma = mongoose.Schema({
	// Weapon Name
	name: {
		type: String,
		required: true,
	},
	// Attribute type only lets fighters with same secondary equip it
	attribute: {
		type: String,
		required: true,
	},
	// Stat boosts given
	enhancements: {
		// Life Points Increase
		health: {
			type: Number,
		},
		// Attack Power Increase
		strength: {
			type: Number,
		},
		// Movement Speed Increase
		speed: {
			type: Number,
		},
		// Dodge Chance Increase
		agility: {
			type: Number,
		},
	},
});

module.exports = mongoose.model("Weapons", weaponScehma);
