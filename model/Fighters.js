const mongoose = require("mongoose");

const fighterSchema = mongoose.Schema({
	// Fighter Name
	name: {
		type: String,
		required: true,
	},
	stats: {
		// Life Points
		health: {
			type: Number,
			required: true,
		},
		// Attack Power
		strength: {
			type: Number,
			required: true,
		},
		// Movement speed
		speed: {
			type: Number,
			required: true,
		},
		// Dodge chance
		agility: {
			type: Number,
			required: true,
		},
	},
	// Primary Class -- Magician, Warrior, Ninja, Archer
	class: {
		type: String,
		required: true,
	},
	// Secondary Class -- Tank, Summoner, Arcane, Scout, Berserker, Longshot
	attribute: {
		type: String,
		required: true,
	},
	// Abilities provided if chosen as a Support
	support: {
		abilities: {
			// Main Ability
			primary: {
				type: String,
				required: true,
			},
			// Supplemental Ability
			secondary: {
				type: String,
			},
		},
		// Power increase if they're matched with specific fighters
		boost: {
			primary: {
				type: String,
				required: true,
			},
			secondary: {
				type: String,
				required: true,
			},
		},
	},
});

module.exports = mongoose.model("Fighter", fighterSchema);
