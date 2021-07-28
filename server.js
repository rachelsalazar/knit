const express = require('express');
const app = express();
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const plants = require('./routes/api/plants');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// Bringing in body-parser for URL encoding and json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configure MongoDB Database
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Pasport middleware, creating instance of passport
app.use(passport.initialize());

// Passport configuration
require('./config/passport')(passport);

app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/users', users);

app.use('/api/profile', profile);

app.use('/api/plants', plants);

const port = 5007;
app.listen(port, () => console.log((`App is running on port ${port}`)));