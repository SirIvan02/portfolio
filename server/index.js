const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express()

app.use(express.json());

app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  app.options('*', cors()); 

  app.use(cors({
    origin: 'https://www.ivancamassa.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: process.env.GMAIL_ADDRESS,
    subject: 'Nuovo messaggio di contatto dal sitoweb',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});