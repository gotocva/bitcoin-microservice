
import {env, transporter, mailOptions} from "../../config/index"


/**
 * Function to send welcome email on user register
 * @param {String} email 
 * @param {Number} otp 
 */
export const sendWelcomeEmail = (email,otp) => {

    let html = '<meta http-equiv="Content-type" content="text/html; charset=utf-8">';
        html += '<h1>Welcome to '+env.SITE_NAME+' </h1><br>OTP to verify your account is '+otp;

    mailOptions.subject = 'Welcome to '+env.SITE_NAME+' ';
    mailOptions.html = html;
    mailOptions.to = email;
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('email sending failure'+error);
          return false;
        } else {
          console.log('Email sent: ' + info.response);
          return true;
        }
    });
};