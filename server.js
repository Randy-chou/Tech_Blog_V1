const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});

