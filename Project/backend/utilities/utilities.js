const nodemailer = require("nodemailer");

function mailSender(email, subject, text) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    var mailOptions = {
      from: "NSU Complain Lodge System",
      to: email,
      subject: subject,
      text: text
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  
exports.mailSender = mailSender;
