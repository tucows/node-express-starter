const express = require('express');
const {useAsync} = require('../app/helpers');

const ExampleModule = require('../app/example-module')
const ExampleModuleRouter = express.Router();


ExampleModuleRouter.get('/',  useAsync(ExampleModule.helloWorldHandler))


module.exports = ExampleModuleRouter;
