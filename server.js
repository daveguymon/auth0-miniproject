const express = require('express')
  , session = require('express-session')
  , passport = require('passport')
  , Auth0Strategy = require('passport-auth0')
  , keys = require('./src/keys')
  , app = express()
  , port = 3005;

app.use(session({secret: 'supersecretrandomstring'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: keys.domain,
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: 'http://localhost:3005/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));

app.get('/auth/', passport.authenticate('auth0'));
app.get('/auth/callback',
    passport.authenticate('auth0', {successRedirect: '/me'}));

passport.serializeUser(function(profileToSession, done) {
  done(null, profileToSession);//puts second argument ('profileToSession') on session
});

passport.deserializeUser(function(profileFromSession, done) {
  //obj is value from session
  done(null, profileFromSession); //puts second argument ('profileFromSession') on req.user
});

app.get('/me', function(req,res) {
  res.send(req.user);
})

app.listen(port, ()=>{console.log(`Listening on port: ${port}`)})
