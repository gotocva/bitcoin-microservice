import env from "./env";
import { transporter, mailOptions } from "./email";
import * as HTTP_STATUS_CODES from "./HttpStatusCodes";

module.exports = { env, transporter, mailOptions, HTTP_STATUS_CODES}