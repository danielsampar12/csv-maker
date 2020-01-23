const { Router } = require('express');
const EmpresaController = require('./Controllers/EmpresaController');
const SearchController = require('./Controllers/SearchController');
const routes = Router();

routes.post('/clientes', EmpresaController.store);

routes.get('/csv',EmpresaController.index);
routes.get('/clientes', SearchController.index);

routes.put('/edit', EmpresaController.update);
routes.delete('/delete', EmpresaController.destroy);

routes.get('/', (request, response) =>{
  return response.json({message: 08577607933});
})

module.exports = routes;