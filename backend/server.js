import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'; // Authentication route
import cors from 'cors';
import dotenv from 'dotenv';
import uploadRoutes from './routes/upload.js'; // File upload routes
import addtest from "./routes/addtest.js"
dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/learners', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api', uploadRoutes); 
app.use('/uploads', express.static('uploads'));
app.use('/tests',addtest);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});