const blogRouter = require("express").Router();
const Blog = require("../models/blogs");
const { error } = require("../utils/logger");

blogRouter.get("/", (req, res, next) => {
	Blog.find({})
		.then((data) => res.json(data))
		.catch((error) => next(error));
});

blogRouter.get("/:id", (req, res, next) => {
	Blog.findById(req.params.id)
		.then((blog) => {
			res.json(blog);
		})
		.catch((error) => next(error));
});

blogRouter.post("/", (req, res, next) => {
	const { author, title, url, likes } = req.body;

	const blog = new Blog({
		author: author,
		title: title,
		url: url,
		likes: likes,
	});

	blog
		.save()
		.then((savedBlog) => res.status(201).json(savedBlog))
		.catch((error) => next(error));
});

module.exports = blogRouter;
