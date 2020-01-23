//const csv = require('csv-parser');
const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse; 
const routes = require('./routes');
const Empresa = require('./models/Empresa');
const fs = require('fs');
const csvData = [];

CSVtoJSON().fromFile('../data/clientes-data.csv').then(data => {
  console.log(data);
  
});

/*
fs.createReadStream('c:/csv-maker/backend/data/clientes-data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row)
      
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  console.log(csvData);
  */
