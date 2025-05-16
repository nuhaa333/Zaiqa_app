// server.js

const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('dotenv').config();
require('./auth'); // <-- Make sure auth.js is configured correctly

const app = express();
const PORT = 5000;

// 🔐 CORS + session for Google Auth
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // true in production
    httpOnly: true,
    sameSite: 'lax'
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// ----------------------
// 🍕 API ROUTES
// ----------------------

// Helper function to fetch public API
function fetchFromPublicAPI(url, res) {
  https.get(url, (apiRes) => {
    let data = '';
    apiRes.on('data', chunk => data += chunk);
    apiRes.on('end', () => {
      try {
        res.json(JSON.parse(data));
      } catch (err) {
        res.status(500).json({ error: 'Failed to parse data' });
      }
    });
  }).on('error', err => {
    res.status(500).json({ error: 'Failed to fetch data' });
  });
}

// ☕ Iced Coffee
app.get('/api/iced-coffee', (req, res) => {
  fetchFromPublicAPI('https://api.sampleapis.com/coffee/iced', res);
});

// ☕ Hot Coffee
app.get('/api/hot-coffee', (req, res) => {
  fetchFromPublicAPI('https://api.sampleapis.com/coffee/hot', res);
});

// 🍕 Pizza from JSON
app.get('/api/pizza', (req, res) => {
  const filePath = path.join(__dirname, 'pizzaData.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load pizza data' });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: 'Failed to parse pizza data' });
    }
  });
});

// 🍛 Main Course from JSON
app.get('/api/MainCourse', (req, res) => {
  const filePath = path.join(__dirname, 'MainCourse.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load data' });
    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: 'Failed to parse data' });
    }
  });
});

// 📅 Reservation
app.post('/reserve', (req, res) => {
  console.log("Reservation request received:", req.body);
  res.json({ message: "Reservation received!" });
});

// ----------------------
// 🔐 Google Auth Routes
// ----------------------

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/login',
    failureRedirect: '/'
  })
);

// 👤 Get Authenticated User
app.get('/user', (req, res) => {
  res.send(req.user || null);
});

// 🔓 Logout
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:3000/login');
  });
});

// ----------------------
// ✅ Server Start
// ----------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
