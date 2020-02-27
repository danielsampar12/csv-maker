const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const{setUpWebSocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setUpWebSocket(server);

mongoose.connect('mongodb+srv://dgsampar:@Root@clustersemanaomnistack-pvlxj.mongodb.net/csvMaker?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(routes);


server.listen(3333);