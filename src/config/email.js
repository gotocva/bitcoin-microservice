import nodemailer from "nodemailer";
import env from "../config/env";
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.SMTP_EMAIL,
      pass: env.SMTP_PASSWORD
    }
});
  
const mailOptions = {
    from: env.SMTP_EMAIL
};

module.exports = { transporter, mailOptions }