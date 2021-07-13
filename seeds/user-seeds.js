const { User } = require('../models');

const userData = [
  {
    name: 'Bob',
    password: "Banana"
  },
  {
    name: 'Joe',
    password: "OpenNowPlease"
  },
  {
    name: 'Carol',
    password: "March242010"
  },
];

const seedCategories = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedCategories;