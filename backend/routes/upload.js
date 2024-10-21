import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure storage for videos
const videoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos'); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});

// Configure storage for notes
const noteStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/notes'); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});

// Initialize upload middleware
const uploadVideo = multer({ storage: videoStorage });
const uploadNote = multer({ storage: noteStorage });

// Define routes for uploading video and note
router.post('/uploadVideo', uploadVideo.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No video file uploaded.' });
  }
  res.json({ message: 'Video uploaded successfully!', filePath: req.file.path });
});

router.post('/uploadNote', uploadNote.single('note'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No note file uploaded.' });
  }
  res.json({ message: 'Note uploaded successfully!', filePath: req.file.path });
});

export default router;
