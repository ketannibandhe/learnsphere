import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true, // Removes any extra spaces
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true, // Removes any extra spaces
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // Basic email regex validation
      'Please enter a valid email address',
    ],
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

export default User;
