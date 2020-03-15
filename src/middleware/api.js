import { User } from "../model/UserSchema";


export const auth = (req,res,next) => {
    if(req.headers['authentication'] === undefined) res.error({},"Authentication required",401);
    let token = req.headers['authentication'];
    User.findOne({token:token}).exec((error,result) => {
        if (error || result === null || result === undefined) {
            res.error({},"Authentication required",401);
        } else {
            req.token = token;
            next();
        }
    });
}