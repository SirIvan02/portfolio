const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://www.ivancamassa.com',
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req,res) => {
    res.json({message:'Ciao! sei nel backend'});
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ivancamassa@gmail.com',
      pass: 'jcgqmiyxjucftaak',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'ivancamassa@gmail.com',
    to: 'ivancamassa@gmail.com',
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
