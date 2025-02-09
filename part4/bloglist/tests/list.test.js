const { test, describe } = require("node:test");
const assert = require("node:assert");

const list_helper = require("../utils/list_helper");

test("dummy returns 1", () => {
	const blogs = [];
	assert.strictEqual(list_helper.dummy(blogs), 1);
});

describe("total likes", () => {
	test("of emtpy list is zero", () => {
		assert.strictEqual(list_helper.totalLikes([]), 0);
	});

	test("when list has only one blog, equals the likes of that", () => {
		const blogs = [
			{
				_id: "679fc9387e4d2b9054bdc6c3",
				author: "NM",
				title: "New blog",
				url: "url/to/new-blog",
				likes: 20,
			},
		];

		assert.strictEqual(list_helper.totalLikes(blogs), blogs[0].likes);
	});

	test("of a bigger list is calculated right", () => {
		const blogs = [
			{
				_id: "679fc9387e4d2b9054bdc6c3",
				author: "NM",
				title: "New blog",
				url: "url/to/new-blog",
				likes: 20,
			},
			{
				_id: "679fc9387e4d2b9054bdc6c3",
				author: "NM",
				title: "New blog",
				url: "url/to/new-blog",
				likes: 25,
			},
			{
				_id: "679fc9387e4d2b9054bdc6c3",
				author: "NM",
				title: "New blog",
				url: "url/to/new-blog",
				likes: 2,
			},
			{
				_id: "679fc9387e4d2b9054bdc6c3",
				author: "NM",
				title: "New blog",
				url: "url/to/new-blog",
				likes: 560,
			},
		];

		let sum = 0;
		blogs.forEach((blog) => (sum += blog.likes));

		assert.strictEqual(list_helper.totalLikes(blogs), sum);
	});
});
