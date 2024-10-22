// emailService.js
import nodemailer from 'nodemailer';

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other email services as needed
  auth: {
    user: 'venkatsudarshan29@gmail.com', // Your email
    pass: 'hepk bljw nzzk mjjb', 
  },
});

// Function to send email
const sendResultsEmail = (to, subject, body) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject,
    text: body,
  };

  return transporter.sendMail(mailOptions);
};

export default sendResultsEmail;
