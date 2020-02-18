const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    const {uf} = request.query;
    const emp = await Empresa.find({
      uf: {
        $regex: '.*' + uf + '.*',
        $options: 'i',
      }
    });
    return response.json(emp);
  }
};
