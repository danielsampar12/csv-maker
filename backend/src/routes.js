const { Router } = require('express');
const EmpresaController = require('./Controllers/EmpresaController');
const SearchController = require('./Controllers/SearchController');
const SearchByRepresentante = require('./Controllers/SearchByRepresentante');
const SearchByStatusNegociacao = require('./Controllers/SearchByStatusNegociacaoController');
const SearchByValide = require('./Controllers/SearchByValide');
const SearchByCidade = require('./Controllers/SearchByCidade');
const SearchByUf = require('./Controllers/SearchByUf');

const routes = Router();

routes.post('/clientes', EmpresaController.store);

routes.get('/clientes',EmpresaController.index);
routes.get('/search', SearchController.index);
routes.get('/searchByRepresentante', SearchByRepresentante.index);
routes.get('/searchByStatusNegociacao', SearchByStatusNegociacao.index);
routes.get('/searchByValide', SearchByValide.index);
routes.get('/searchByCidade', SearchByCidade.index);
routes.get('/searchByUf', SearchByUf.index);

routes.put('/clientes', EmpresaController.update);
routes.delete('/clientes', EmpresaController.delete);


module.exports = routes;