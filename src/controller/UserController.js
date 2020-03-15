
import * as UserDao from "../dao/UserDao";
import { encrypt, decrypt } from "../utils/crypto";

export const store = async (req,res) => {
    const OTP = Math.random() * (9999 - 1111) + 1111;
    req.body.token = await encrypt(req.body);
    req.body.otp = OTP;
    UserDao.createUser(req,res);
};


export const verifyOtp = async (req,res) => {
    UserDao.verifyEmail(req,res);
}