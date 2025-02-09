const dummy = (blogs) => {
	return 1;
};

const totalLikes = (blogs) => {
	return blogs.length === 0 ? 0 : blogs.reduce((sum, item) => (sum += item.likes), 0);
};

const favouriteBlog = (blogs) => {
	if (blogs.length === 0) return {};

	let favouriteBlog = blogs[0];

	if (blogs.length > 1)
		blogs.forEach((blog) => {
			if (blog.likes > favouriteBlog.likes) favouriteBlog = blog;
		});

	return { title: favouriteBlog.title, author: favouriteBlog.author, likes: favouriteBlog.likes };
};

module.exports = {
	dummy,
	totalLikes,
	favouriteBlog,
};
