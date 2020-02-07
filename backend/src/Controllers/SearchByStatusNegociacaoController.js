const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    const {status_negociacao} = request.query;

    const emp = await Empresa.find({
      status_negociacao:{
        $regex: ".*" + status_negociacao + ".*",
        $options: 'i',
      }
    });
    return response.json(emp);
  }
};
