import mongoose from 'mongoose';

// Define the note schema
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title or description of the note
  fileUrl: { type: String, required: true }, // URL or path to the stored note
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who uploaded the note
  uploadedAt: { type: Date, default: Date.now }, // Timestamp for when the note was uploaded
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the Note model
const Note = mongoose.model('Note', noteSchema);

export default Note;