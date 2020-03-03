const Post = require('../models/Post');
const ReadFile = require('../../tmp/uploads/readFile');
const Empresa = require('../models/Empresa');
const fs = require('fs');

module.exports = {
  async store(request, response){
    const {originalname: name, size, filename: key} = request.file; 
    const post = await Post.create({
      name,
      size,
      key,
    });
    const data = ReadFile(key);
    
    data.map(async(record) => {
      const cnpj = record.cnpj;
      let emp = await Empresa.findOne({cnpj});
      if(!emp){
        console.log(cnpj);
        console.log(record.valide);
        console.log(record.representante);
        console.log(record.responsavel);
        console.log(record.razao_social);
      }
    });
    
    fs.unlink(`${key}`, (err) => {
      if(err) return console.log(err);
      console.log('successfully deleted file: ' + key);
    })
    
    
    return response.json(post);
  }
};
