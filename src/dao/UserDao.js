
import { User } from "../model/UserSchema"; 
import { sendWelcomeEmail } from "../services/email/user"; 

export const createUser = (req,res) => {
    const user = new User(req.body);
    user.save((error,result) => {
        if (error) {
            res.error(error,"Unable to create an account");
        } else {
            sendWelcomeEmail(req.body.email,req.body.otp);
            res.success(result,"Registered successfully");
        }
    });
};     

export const verifyEmail = (req,res) => {
    User.findOne({$and : [{token:req.token},{otp:req.body.otp}]}).exec((error,result) => {
        if (error || result === null) {
            res.error(error,"Invalid otp");
        } else {
            User.findOneAndUpdate({token:req.token},{$set : {is_email_verified:1}}).exec();
            res.success(result,"Email verified successfully",200);
        }
    });
} 