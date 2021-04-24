const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	health: {
		type: Number,
		required: true,
	},
	strength: {
		type: Number,
		required: true,
	},
	speed: {
		type: Number,
		required: true,
	},
	stamina: {
		type: Number,
		required: true,
	},
	agility: {
		type: Number,
		required: true,
	},
	vision: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Characters", testSchema);
