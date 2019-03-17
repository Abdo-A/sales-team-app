const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const sendNotifications = require('./assets/utils/sendNotifications');

const app = express();

setTimeout(() => {
  sendNotifications([
    {
      to: 'ExponentPushToken[vFUrM6Mu1qcUJV-o683cjD]',
      sound: 'default',
      title: 'Obbaaa',
      body: 'This is a test',
    },
  ]);
}, 5000);

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Mongoose Config
require('./config/mongoose');

// Passport Config
app.use(passport.initialize());
require('./config/passport')(passport);

// Cross Origin Problem
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/dc', require('./routes/dc'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// To push to heroku, we just do 'git push heroku master' from the backend
