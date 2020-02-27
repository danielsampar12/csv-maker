const xlsx = require('xlsx');
const Empresa = require('../../src/models/Empresa');
  function readFile(key){
    const workBlock = xlsx.readFile(`${key}`, {cellDates: true});

    const workSheet = workBlock.Sheets['BANCODEDADOS'];
    
    let data = xlsx.utils.sheet_to_json(workSheet);
    console.log(data);
    data.map(async(record) => {
      let emp = await Empresa.create({
        
      });
    })

  }

  module.exports = readFile;
/*
 data.map((record) => {
*
*    })
*/