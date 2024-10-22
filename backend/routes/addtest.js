// router/addtest.js
import express from 'express';
import Test from '../models/Test.js'; // Adjusted to match the directory structure
import sendResultsEmail from './emailService.js'; // Import the email service

const router = express.Router();

// Route to create a new test
router.post('/', async (req, res) => {
    const { name, totalQuestions, marksPerQuestion, questions } = req.body;

    const test = new Test({
        name,
        totalQuestions,
        marksPerQuestion,
        questions,
    });

    try {
        const savedTest = await test.save();
        res.status(201).json(savedTest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all tests
router.get('/', async (req, res) => {
    try {
        const tests = await Test.find();
        res.json(tests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to submit answers and send email
router.post('/submit', async (req, res) => {
    const { testId, userAnswers, userEmail } = req.body; // Include user email

    // Retrieve the test from the database
    const test = await Test.findById(testId);
    if (!test) {
        return res.status(404).json({ message: 'Test not found' });
    }

    // Calculate the score
    let score = 0;
    let emailBody = `Test: ${test.name}\n\nQuestions and Answers:\n`;

    test.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = parseInt(question.correctAnswer) - 1; // Adjust index to zero-based
        emailBody += `Q${index + 1}: ${question.questionText}\n`;
        emailBody += `Options: ${question.options.join(', ')}\n`;
        emailBody += `Your Answer: ${question.options[userAnswer] || 'No answer'}\n`;
        emailBody += `Correct Answer: ${question.options[correctAnswer]}\n\n`;

        if (userAnswer === correctAnswer) {
            score += parseInt(test.marksPerQuestion);
        }
    });

    emailBody += `Total Score: ${score} / ${test.totalQuestions * test.marksPerQuestion}\n`;

    // Send email with the results
    try {
        await sendResultsEmail(userEmail, 'Test Results', emailBody); // Send the email
        res.status(200).json({ message: 'Answers submitted successfully', testId, userAnswers, score });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

export default router;
