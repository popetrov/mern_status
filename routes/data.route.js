const { Router } = require('express');
const router = Router();
const Data = require('../models/Data');

router.post('/add', async (req, res) => {
	try {
		const { text, userId } = req.body;

		const data = await new Data({
			text,
			owner: userId,
		});

		await data.save();

		res.json(data);
	} catch (e) {
		console.log(e);
	}
});

router.get('/', async (req, res) => {
	try {
		const { userId } = req.query;

		const data = await Data.find({ owner: userId });

		res.json(data);
	} catch (e) {
		console.log(e);
	}
});

router.delete('/delete/:id', async (req, res) => {
	try {
		const data = await Data.findOneAndDelete({ _id: req.params.id });
		res.json(data);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
