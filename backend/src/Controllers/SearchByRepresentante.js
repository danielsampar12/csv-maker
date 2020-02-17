const Empresa = require('../models/Empresa')

module.exports = {
  async index(request, response){
    const {representante} = request.query;

    const emp = await Empresa.find({
      representante:{
        $regex: ".*" + representante + ".*",
        $options: 'i'
      }
    });
    return response.json( emp );
  }

}

