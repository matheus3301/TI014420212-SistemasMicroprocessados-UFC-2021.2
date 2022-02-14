const mongoose = require("mongoose");

const opts = {
	timestamps: {
		createdAt: 'timestamp',
		updatedAt: 'updated_at'
	}
};

const dataSchema = mongoose.Schema({
	temperature: Number,
	led1: Number,
	led2: Number,
}, opts)

module.exports = dataSchema;