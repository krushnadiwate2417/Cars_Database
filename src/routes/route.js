const express = require('express');
const carContoller = require('./../controllers/carContoller');

const userRouter = express.Router();

userRouter.route('/cars').get(carContoller.getCars);

module.exports = userRouter;