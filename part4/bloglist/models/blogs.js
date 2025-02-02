const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	author: String,
	title: String,
	url: String,
	likes: Number,
});

blogSchema.set("toJSON", {
	transform: (doc, ret) => {
		ret.id = doc._id.toString();
		delete ret._id;
		delete ret.__v;
	},
});

module.exports = mongoose.model("Blog", blogSchema);
