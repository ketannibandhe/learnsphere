import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'; // Include the .js extension
import cors from 'cors';
import dotenv from 'dotenv';
import uploadRoutes from './routes/upload.js';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/learners', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to match your frontend's URL
  credentials: true,
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', uploadRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

