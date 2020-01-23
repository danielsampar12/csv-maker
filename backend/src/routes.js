const { Router } = require('express');
const EmpresaController = require('./Controllers/EmpresaController');
const routes = Router();

routes.post('/clientes', EmpresaController.store);

routes.get('/csv',EmpresaController.index);

routes.put('/edit:id', EmpresaController.update);
//routes.delete('/clientes:cnpj', EmpresaController.destroy);

routes.get('/', (request, response) =>{
  return response.json({message: 08577607933});
})

module.exports = routes;