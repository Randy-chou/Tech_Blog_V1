const { Comment } = require('../models');

const commentData = [
  {
    content: 'Welcome to the server man.',
    user_id: "3",
    post_id: "1"
  },
  {
    content: 'here are some rules',
    user_id: "2",
    post_id: "1"
  },
  {
    content: 'can you send me the rules over private chat?',
    user_id: "1",
    post_id: "2"
  },
  {
    content: 'Shoop Whoop!',
    user_id: "2",
    post_id: "3"
  },
];

const seedComments= () => Comment.bulkCreate(commentData);

module.exports = seedComments;