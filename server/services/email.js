require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const Email = require('../models/Email');

const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  },
});

// Email sending endpoint
router.post('/send', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_FROM, // Use environment variable
    to: process.env.EMAIL_TO, // Use environment variable
    subject: `${name} reaching out to you for booking`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully!');
    }
  });

  // Save email data to MongoDB
  const emailEntry = new Email({ name, email, phone, message });
  emailEntry.save()
    .then(() => console.log('Email data saved to database'))
    .catch((error) => console.error('Error saving email data:', error));
});

// Endpoint to get list of saved email entries
router.get('/contact_by', async (req, res) => {
  try {
    const emailEntries = await Email.find();
    res.status(200).json(emailEntries);
  } catch (error) {
    console.error('Error fetching email entries:', error);
    res.status(500).send('Failed to fetch email entries.');
  }
});

module.exports = router;
