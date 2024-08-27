const nodemailer = require('nodemailer');

function sendEmail(emailAddress, otp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '<your-email-address>',
      pass: '<your-email-password>',
    },
  });

  const mailOptions = {
    from: '<your-email-address>',
    to: emailAddress,
    subject: 'Your OTP',
    text: `Your OTP is ${otp}`,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail;