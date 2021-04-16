const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const env = process.env.DB_URI;

mongoose
	.connect(env, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((result) => console.log("Connected to DB!"))
	.catch((err) => console.log(err));

app.listen(PORT, () => {
	console.log(`app listening on port: ${PORT}`);
});
