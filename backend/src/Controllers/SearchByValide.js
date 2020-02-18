const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    const {valide} = request.query;

    const emp = await Empresa.find({
      valide: {
        $regex: ".*" + valide + ".*",
        $options: 'i',
      }
    });
    return response.json(emp);
  }
};
