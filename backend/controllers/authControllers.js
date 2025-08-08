const User = require('../models/userDetails');

const register = async (req, res) => {
    try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (!email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
      }
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    //const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password//: hashedPassword
    });

    console.log('User created:', newUser); // Debug log
    return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } 
    catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
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
};

module.exports = {
    register,
    login
};
    