const { Router } = require('express');
const EmpresaController = require('./Controllers/EmpresaController');
const SearchController = require('./Controllers/SearchController');
const SearchByRepresentante = require('./Controllers/SearchByRepresentante');
const SearchByStatusNegociacao = require('./Controllers/SearchByStatusNegociacaoController');


const routes = Router();

routes.post('/clientes', EmpresaController.store);

routes.get('/clientes',EmpresaController.index);
routes.get('/search', SearchController.index);
routes.get('/searchByRepresentante', SearchByRepresentante.index);
routes.get('/searchByStatusNegociacao', SearchByStatusNegociacao.index);

routes.put('/clientes', EmpresaController.update);
routes.delete('/clientes', EmpresaController.delete);


/*
routes.get('/', (request, response) =>{
  return response.json({message: 08577607933});
})
*/
module.exports = routes;