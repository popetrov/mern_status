const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User.js');

const router = Router();

router.post(
	'/registration',
	[
		check('email', 'Некорректный email').isEmail(),
		check('password', 'Некорректный пароль').isLength({ min: 6 }),
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
				return res
					.status(300)
					.json({ message: 'Данный пользователь уже существует' });
			}

			const hashedPassword = await bcrypt.hash(password, 12);

			const user = new User({
				email,
				password: hashedPassword,
			});

			await user.save();

			return res.status(201).json({ message: 'Пользователь зарегистрирован' });
		} catch (e) {
			console.log(e);
		}
	}
);

router.post(
	'/login',
	[
		check('email', 'Некорректный email').isEmail(),
		check('password', 'Некорректный пароль').exists(),
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
					.json({ message: 'Данный пользователь не зарегистрирован' });
			}

			const isMatchPassword = await bcrypt.compare(password, user.password);

			if (!isMatchPassword) {
				return res.status(400).json({ message: 'Неверный пароль' });
			}

			const jwtSecret = 'TH01';

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
