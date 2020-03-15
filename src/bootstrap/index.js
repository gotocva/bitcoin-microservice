import { app, router } from "./express";
import conn from "./mongoDb";


module.exports = { app, router, conn };