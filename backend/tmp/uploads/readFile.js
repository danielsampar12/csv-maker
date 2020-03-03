const xlsx = require('xlsx');
const Empresa = require('../../src/models/Empresa');
  function ReadFile(key){
    const workBlock = xlsx.readFile(`${key}`, {cellDates: true});

    const workSheet = workBlock.Sheets['BANCODEDADOS'];
    
    let data = xlsx.utils.sheet_to_json(workSheet);
    
    return data;
  }

  module.exports = ReadFile;
/*
 data.map(async(record) => {
      let emp = await Empresa.create({
        
      });
    })
*/