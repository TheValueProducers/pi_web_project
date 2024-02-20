const express = require('express');
const {redirectToCheat, renderResult, processResult} = require("../controllers/resultController")
const resultRouter = express.Router();
const {checkAuthenticated, checkNotAuthenticated, checkRole} = require("../middleware/checkAuthenticated")

resultRouter.get("/:userRole/result/:status/:userId", checkAuthenticated, checkRole, renderResult)
resultRouter.post("/:userRole/result/:status/:userId", checkAuthenticated, checkRole, processResult);


module.exports = {resultRouter}