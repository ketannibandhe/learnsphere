import express from 'express';
import User from '../models/User.js'; 
import bcrypt from 'bcrypt';

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body; // Added email

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email }); // Added email
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'User creation failed' });
  }
});

// Login route remains the same

export default router;
