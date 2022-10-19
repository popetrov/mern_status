const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/data', require('./routes/data.route'));

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
