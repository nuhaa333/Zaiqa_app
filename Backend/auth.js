require('dotenv').config();
const passport = require('passport');
console.log('CLIENT_ID:', process.env.CLIENT_ID);
console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET);
console.log('redirect URI:',`${process.env.BACKEND_URL}/auth/google/callback`);
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const callbackURL = process.env.NODE_ENV === 'production'
  ? 'https://zaiqa-app-1.onrender.com/auth/google/callback'
  : 'http://localhost:5000/auth/google/callback';


passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: callbackURL
},
(accessToken, refreshToken, profile, done) => {
  // Here you can store the profile to your DB
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
