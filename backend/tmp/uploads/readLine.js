const xlsx = require('xlsx');

  function readFile(key){
    const workBlock = xlsx.readFile(`${key}`, {cellDates: true});

    const workSheet = workBlock.Sheets['BANCODEDADOS'];

    let data = xlsx.utils.sheet_to_json(workSheet);
    console.log(data);
  }

  module.exports = readFile;

/*  data.map((record) => {
*
*    })
*/