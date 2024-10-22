// models/Test.js
import mongoose from 'mongoose';

// Define the question schema
const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: { type: [String], required: true }, // Array of strings for options
    correctAnswer: { type: Number, required: true }, // Index of the correct answer
});

// Define the test schema
const testSchema = new mongoose.Schema({
    name: { type: String, required: true },
    totalQuestions: { type: Number, required: true },
    marksPerQuestion: { type: Number, required: true },
    questions: { type: [questionSchema], required: true }, // Array of questions
});

// Create a model from the schema
const Test = mongoose.model('Test', testSchema);

// Export the model using ES module syntax
export default Test;
