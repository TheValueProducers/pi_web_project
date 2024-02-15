const express = require('express');
const rootRouter = express.Router();
const {homeRouter} = require("./home");
const {infoRouter} = require("./info");
const {instructionRouter} = require("./instruction")
const {leaderboardRouter} = require("./leaderboard");
const {resultRouter} = require("./result")
const {signInRouter} = require("./signIn")
const {testRouter} = require("./test")
const {registerRouter} = require("./register")


rootRouter.use("/", homeRouter, infoRouter, instructionRouter, leaderboardRouter, signInRouter, testRouter, resultRouter, registerRouter)

module.exports = {rootRouter}