require('dotenv').config();
const passport = require('passport');
console.log('CLIENT_ID:', process.env.CLIENT_ID);
//console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET);
console.log('redirect URI:',`${process.env.BACKEND_URL}/auth/google/callback`);
const express = require('express');
const router = express.Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mockUser = {
  email: "test@example.com",
  password: "test123", 
  name: "Test User"
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === mockUser.email && password === mockUser.password) {
    return res.status(200).json({ user: { name: mockUser.name, email: mockUser.email } });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;

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
