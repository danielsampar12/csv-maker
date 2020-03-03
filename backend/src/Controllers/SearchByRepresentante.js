const Empresa = require('../models/Empresa')

module.exports = {
  async index(request, response){
    const {representante} = request.query;
    console.log(representante)
    const emp = await Empresa.find({
      representante:{
        $regex: ".*" + representante + ".*",
        $options: 'i'
      }
    });
    console.log(emp)
    return response.json( emp );
  }

}

