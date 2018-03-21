var passport = require('passport');
const config = require('./config');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var db = require('./models');

const GOOGLE_CLIENT_ID = "217924618359-0h2491otk1c8cb6ie83pu5lfifdki9h1.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "e_oBiorVMt9iiO52xEj1AF9E";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        console.log('passport function is firing');
        students.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));