const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://dgsampar:@Root@clustersemanaomnistack-pvlxj.mongodb.net/csvMaker?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);