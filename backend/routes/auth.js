import express from 'express';
import User from '../models/User.js';
// import { verifyToken } from '../middleware/auth.js'; // Ensure you have this middleware to protect routes

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // No hashing; save the password in plain text (not recommended)
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup Error:', error.message);
    res.status(400).json({ error: 'User creation failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the plain text password (no hashing)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Successful login
    res.status(200).json({
      message: 'Login successful',
      username: user.username,
      email: user.email, // Optionally send email or any other details
    });

  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
