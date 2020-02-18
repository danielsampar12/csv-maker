const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    const {cidade} = request.query;

    const emp = await Empresa.find({
      cidade: {
        $regex: '.*' + cidade + '.*',
        $options: 'i',
      }
    });
    return response.json(emp);
  }
};
