const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.post('/registration', async (req, res) => {
	try {
		const { email, password } = req.body;

		const isUsed = await User.findOne({ email });

		if (isUsed) {
			return res
				.status(300)
				.json({ message: 'Пользователь с данным e-mail уже существует' });
		}

		const user = new User({
			email,
			password,
		});

		await user.save();

		res.status(200).json({ message: 'Поздравляем! Вы зарегистрировались!' });
	} catch (e) {
		comsole.log(e);
	}
});

module.exports = router;
