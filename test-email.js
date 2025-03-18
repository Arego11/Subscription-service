import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './config/env.js';

const accountEmail = 'aregar20012001@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: accountEmail,
  to: 'aregbusiness11@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});