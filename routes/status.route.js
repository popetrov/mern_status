const { Router } = require('express');
const router = Router();
const Status = require('../models/Status');

router.post('/add', async (req, res) => {
	try {
		const { data, userId } = req.body;

		const statuses = new Status({
			data,
			owner: userId,
		});

		await statuses.save();

		res.json(statuses);
	} catch (e) {
		console.log(e);
	}
});

router.get('/', async (req, res) => {
	try {
		const { userId } = req.query;

		const status = await Status.find({ owner: userId });

		res.json(status);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
