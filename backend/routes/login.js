const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');


// Login endpoint
router.post('/', async (req, res) => {
  const { role, username, password } = req.body;

  try {
    // Find user based on username and role
    const user = await User.findOne({ username, role });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the hashed password with the provided password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} login successful!` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


router.post('/signup', async (req, res) => {
  const { username, password, role, dob, gender, email } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with additional fields
    const newUser = new User({
      username,
      password: hashedPassword,
      role: role || 'user', // Default to 'user' if no role is provided
      dob,
      gender,
      email,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
