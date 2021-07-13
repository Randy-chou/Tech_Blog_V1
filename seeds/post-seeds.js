const { Post } = require('../models');

const postData = [
  {
    title: "first post",
    content: "hi this is my first blog post!",
    user_id: 1
  },
  {
    title: "Reply post",
    content: "Welcome to the blog, glad to have you.",
    user_id: 2
  },
  {
    title: "Second post",
    content: "Thanks!",
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;