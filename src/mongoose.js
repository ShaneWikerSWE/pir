import React, { useEffect } from "react";
import mongoose from "mongoose";

const MongoDBConnection = () => {
	useEffect(() => {
		mongoose.connect("mongodb://localhost/mydb", {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		const db = mongoose.connection;

		db.on("error", console.error.bind(console, "connection error:"));
		db.once("open", function() {
			console.log("Connected to the database successfully!");
		});
	}, []);

	return null;
};

export default MongoDBConnection;
