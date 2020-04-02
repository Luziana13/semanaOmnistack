const express = require('express');
const ongsCrontroller = require('./controllers/ongsControllers');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const routes = express.Router(); 
/**
 * ONGS
 */
routes.get('/ongs', ongsCrontroller.index);
//criando rota: '/' rota raiz
routes.post('/ongs', ongsCrontroller.create );

/**
 * LOGIN
 */

 routes.post('/session', sessionController.create);
/**
 * INCIDENTS
 */
routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

/**
 * Incidentes especifico de uma ong
 */
routes.get('/profile', profileController.index);
module.exports = routes;