const { Router } = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = Router();

router.post(
	'/registration',
	[
		check('email', 'Некорректный e-mail').isEmail(),
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
					.json({ message: 'Пользователь с данным e-mail уже существует' });
			}

			const salt = await bcrypt.genSalt(10);

			const hashedPassword = await bcrypt.hash(password, salt);

			const user = new User({
				email,
				password: hashedPassword,
			});

			await user.save();

			res.status(201).json({ message: 'Поздравляем! Вы зарегистрировались!' });
		} catch (e) {
			comsole.log(e);
		}
	}
);

router.post(
	'/login',
	[
		check('email', 'Некорректный e-mail').isEmail(),
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
				return res.status(400).json({
					message:
						'Пользователь с таким e-mail не зарегистрирован. Зарегистрируйтесь',
				});
			}

			const isMatch = bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({
					message: 'Неверный пароль для данного e-mail',
				});
			}

			jwtSecret = 'tottenhamChapion';

			const token = jwt.sign({ userId: user.id }, jwtSecret, {
				expiresIn: '1h',
			});

			res.json({ token, userId: user.id });
		} catch (e) {
			comsole.log(e);
		}
	}
);

module.exports = router;
