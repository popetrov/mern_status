const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	data: [{ type: Types.ObjectId, ref: 'Data' }],
});

module.exports = model('User', schema);
