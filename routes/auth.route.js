const { Router } = require('express');
const router = Router();
const User = require('../models/User');

router.post('/registration', async (req, res) => {
	try {
		const { email, password } = req.body;

		const isUsed = await User.findOne({ email });

		if (isUsed) {
			return res.status(300).json({ message: 'Данный email уже занят' });
		}

		const user = new User({
			email,
			password,
		});

		await user.save();

		res.status(201).json({ message: 'Вы зарегистрированы' });
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
