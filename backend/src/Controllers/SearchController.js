const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    console.log(request.query)
    const {cnpj} = request.query;

    const emp = await Empresa.find({
      cnpj: {
        $in: cnpj
      }
    });
    return response.json({ emp });
  },

  
};
