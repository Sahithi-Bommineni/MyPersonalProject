require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserDetails = require('./models/userDetails');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  UserDetails.findOne({ email })
  .then(user => {
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  })
  .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/register', async (req, res) => {
  UserDetails.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});