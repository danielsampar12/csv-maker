const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const EmpresaController = require('./Controllers/EmpresaController');
const SearchController = require('./Controllers/SearchController');
const SearchByRepresentante = require('./Controllers/SearchByRepresentante');
const SearchByStatusNegociacao = require('./Controllers/SearchByStatusNegociacaoController');
const SearchByValide = require('./Controllers/SearchByValide');
const SearchByCidade = require('./Controllers/SearchByCidade');
const SearchByUf = require('./Controllers/SearchByUf');
const PostController = require('./Controllers/PostController');

const Post = require('./models/Post');

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
//upload do xlsx
routes.post('/upload', multer(multerConfig).single('file'), PostController.store);

module.exports = routes;