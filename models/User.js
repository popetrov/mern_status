const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	status: [{ type: Types.ObjectId, ref: 'Status' }],
});

module.exports = model('User', schema);
