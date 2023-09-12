const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["https://portfolio-frontend-nine-wine.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
};

app.use(cors({corsOptions}));
app.use(express.json());

app.use(bodyParser.json());

app.post('https://portfolio-frontend-nine-wine.vercel.app/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
      }
  });

  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: process.env.GMAIL_ADDRESS,
    subject: 'Nuovo messaggio di contatto dal sitoweb',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
