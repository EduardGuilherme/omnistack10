const { Router } = require('express');
//const axios = require('axios');
const routes = Router();
//const Dev = require('./models/dev');

const DevControllers = require('./controllers/DevControllers');
const SeachController = require('./controllers/SeachController');
routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);
routes.get('/seach', SeachController.index);
module.exports = routes;