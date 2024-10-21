import mongoose from 'mongoose';

// Define the video schema
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title or description of the video
  fileUrl: { type: String, required: true }, // URL or path to the stored video
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who uploaded the video
  uploadedAt: { type: Date, default: Date.now }, // Timestamp for when the video was uploaded
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the Video model
const Video = mongoose.model('Video', videoSchema);

export default Video;