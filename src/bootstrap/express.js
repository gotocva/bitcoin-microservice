// import npm packages 
import express from "express";
import cors from 'cors';
const app = express();
const expressWs = require('express-ws')(app);
const useragent = require('express-useragent');
app.use(useragent.express());

const router = express.Router();


/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const success = (req, res, next) => {
    res.success = (body, message, code = 200) => {
      let response = {};
      response['HTTP_STATUS_CODE'] = code || 200;
      response['status'] = true;
      response['message'] = message || req.__lang().success;
      response['body'] = body;
      res.status(code).json(response).end();
    };
    next();
};
app.use(success);

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const error = (req, res, next) => {
    res.error = (body, message, code = 500) => {
        console.error(`Error Occured on ${req.method}; URI = ${req.originalUrl};`);
        console.error(body);
        let response = {};
        response['HTTP_STATUS_CODE'] = code || 500;
        response['status'] = false;
        response['message'] = message || req.__lang().failed;
        response['body'] = body;
        res.status(code).json(response).end();
    };
    next();
};
app.use(error);

/**
 * log all requests
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const logAllRequests = (req,res,next) => {
    const startHrTime = process.hrtime();
    res.on('finish', () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
        console.info(`Method = ${req.method}; URI = ${req.originalUrl}; ${res.statusCode} ${res.statusMessage}; Elapsed time : ${elapsedTimeInMs}; ${res.get('Content-Length') || 0}b sent`)
    })
    next();
}
app.use(logAllRequests);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

module.exports = { app, router }; 