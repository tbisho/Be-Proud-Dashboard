const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
// require strava strategy
const StravaStrategy = require('passport-strava-oauth2').Strategy
/*
 * Passport "serializes" objects to make them easy to store, converting the
 * user to an identifier (id)
 */
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

/*
 * Passport "deserializes" objects by taking the user's serialization (id)
 * and looking it up in the database
 */
passport.deserializeUser((id, cb) => {
  db.user.findByPk(id).then(user => {
    cb(null, user);
  }).catch(cb);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, cb) => {
  db.user.findOne({ 
    where: { email }
  }).then(user => {
    if (!user || !user.validPassword(password)) {
      cb(null, false);
    } else {
      cb(null, user);
    }
  }).catch(cb);
}));

// Strava Strategy
passport.use(new StravaStrategy({
  clientID: 57767,
  clientSecret: '4f5669e3201a690c9e1f74ab0da07ad37b73a36d',
  callbackURL: "http://127.0.0.1:3000/auth/strava/callback"
},
function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {

    // To keep the example simple, the user's Strava profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Strava account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}
));

// export the Passport configuration from this module
module.exports = passport;