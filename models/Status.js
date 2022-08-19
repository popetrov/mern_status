const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	owner: { type: Types.ObjectId, ref: 'User' },
	data: { emoji: String, status: String },
});

module.exports = model('Status', schema);
