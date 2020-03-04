const xlsx = require('xlsx');

  function ReadFile(key){
    const workBlock = xlsx.readFile(`${key}`, {cellDates: true});

    const workSheet = workBlock.Sheets['BANCODEDADOS'];
    
    let data = xlsx.utils.sheet_to_json(workSheet);
    
    return data;
  }

  module.exports = ReadFile;

  