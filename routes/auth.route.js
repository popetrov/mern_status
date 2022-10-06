const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

router.post(
	'/registration',
	[
		check('email', 'некорректный e-mail').isEmail(),
		check('password', 'некорректный пароль').isLength({ min: 8 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при регистрации',
				});
			}

			const { email, password } = req.body;

			const isUsed = await User.findOne({ email });

			if (isUsed) {
				return res.status(300).json({ message: 'Данный email уже занят' });
			}

			const hashedPassword = await bcrypt.hash(password, 12);

			const user = new User({
				email,
				password: hashedPassword,
			});

			await user.save();

			res.status(201).json({ message: 'Вы зарегистрированы' });
		} catch (e) {
			console.log(e);
		}
	}
);

router.post(
	'/login',
	[
		check('email', 'некорректный e-mail').isEmail(),
		check('password', 'некорректный пароль').exists(),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректные данные при регистрации',
				});
			}

			const { email, password } = req.body;

			const user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ message: 'Вы не зарегистрированы. Зарегистрируйтесь' });
			}

			const isMatch = bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ message: 'Не верный пароль. Введите другой' });
			}

			const jwtSecret = 'tottenham';

			const token = jwt.sign({ userId: user.id }, jwtSecret, {
				expiresIn: '1h',
			});

			res.json({ token, userId: user.id });
		} catch (e) {
			console.log(e);
		}
	}
);

module.exports = router;
