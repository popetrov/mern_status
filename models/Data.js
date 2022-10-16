const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	owner: { type: Types.ObjectId, ref: 'User' },
	text: { type: String },
});

module.exports = model('Data', schema);
