const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

async function start() {
	try {
		await mongoose.connect(
			'mongodb+srv://popetrov:Qw210290@cluster0.epn64.mongodb.net/todo?retryWrites=true&w=majority'
		);

		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
}

start();
