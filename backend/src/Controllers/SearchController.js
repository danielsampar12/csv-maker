const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    console.log(request.body)
    

    const emp = await Empresa.findOne({cnpj: request.query.cnpj}, (err, result) =>{
      if(err){
        console.log(err);
      }
      console.log(result);
    })
    return response.json(emp);
  },

  
};
//{cnpj: request.query.cnpj}