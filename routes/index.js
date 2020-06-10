const express = require('express');
const {useAsync} = require('../app/helpers');

const Router = express.Router();
const ExampleModuleRouter = require('./example-module');


Router.use('/hello', ExampleModuleRouter);


module.exports = Router;
