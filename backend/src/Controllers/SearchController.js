const Empresa = require('../models/Empresa');

module.exports = {
  async index(request, response){
    const {cnpj} = request.query;
    const emp = await Empresa.find({
      cnpj:{
        $regex: '.*' + cnpj + '.*',
        $options: 'i',
      }
    }, (err, result) => {
      if(err){
        return err;
      }
      console.log(result);
    });
    return response.json(emp);
  }
};
