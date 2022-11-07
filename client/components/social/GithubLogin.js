require('dotenv').config();

import express from 'express';
import { use, serializeUser, deserializeUser, initialize, session, authenticate } from 'passport';
import { Strategy } from 'passport-github';

use(new Strategy({
    clientID: process.env['GITHUB_CLIENT_ID'],
    clientSecret: process.env['GITHUB_CLIENT_SECRET'],
    callbackURL: '/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('accessToken', accessToken);

    return cb(null, profile);
  }));

serializeUser(function(user, cb) {
  cb(null, user);
});

deserializeUser(function(obj, cb) {
  cb(null, obj);
});

let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


app.use(initialize());
app.use(session());



app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/github',
  authenticate('github'));

app.get('/return',
  authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.listen(process.env['PORT'] || 3000);