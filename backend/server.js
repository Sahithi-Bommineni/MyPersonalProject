require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const UserDetails = require('./models/userDetails');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', require('./routes/authRoutes'));

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   UserDetails.findOne({ email })
//   .then(user => {
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }
//     res.status(200).json({ message: 'Login successful', user });
//   })
//   .catch(err => res.status(500).json({ error: err.message }));
// });

// app.post('/register', async (req, res) => {
//   try{
//     const {username,password,email}=req.body;
//     const existingUser = await UserDetails.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }
//     if (password.length < 6) {
//       return res.status(400).json({ message: 'Password length should be greater than 6 characters' });
//     }

//     // Hash the password
//     //const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the new user
//     const newUser = await UserDetails.create({
//       username,
//       email,
//       password//: hashedPassword
//     });

//     return res.status(201).json({ message: 'User registered successfully', user: newUser });

//   } catch (error) {
//     console.error('Error during registration:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
//});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});