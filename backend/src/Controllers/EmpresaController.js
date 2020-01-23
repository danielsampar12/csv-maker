const Empresa = require('../models/Empresa');
const objectId = require('mongodb').ObjectID;

module.exports = {
  async index(request, response){
    const empresa = await Empresa.find();
    return response.json(empresa);
  },

  async store(request, response){
      const {cnpj} = request.body;
      let emp = await Empresa.findOne({cnpj});
      if(!emp){
        emp = await Empresa.create({
          cnpj: request.body.cnpj,
          valide: request.body.valide,
          representante: request.body.representante,
          razao_social: request.body.razao_social,
          responsavel: request.body.responsavel,
          utiliza: request.body.utiliza,
          qt_consultas: request.body.qt_consultas,
          valor_vcm: request.body.valor_vcm,
          valor_consulta_un: request.body.valor_consulta_un,
          vcm_ofertado: request.body.vcm_ofertado,
          utiliza_negativacao: request.body.utiliza_negativacao,
          valor_gasto_negativacao: request.body.valor_gasto_negativacao,
          valor_pago_negativa: request.body.valor_pago_negativa,
          ddd: request.body.ddd,
          telefone: request.body.telefone,
          ramal: request.body.ramal,
          email: request.body.email,
          ddd2: request.body.ddd2,
          telefone2: request.body.telefone2,
          ramal2: request.body.ramal2,
          email2: request.body.email2,
          observacao: request.body.observacao,
          localizar_cnpj: request.body.localizar_cnpj,
          data_contrato: request.body.data_contrato,
          hora: request.body.hora,
          documento_consulta: request.body.documento_consulta,
          percentagem_cnpj: request.body.percentagem_cnpj,
          negociacao: request.body.negociacao,
          data_ultimo_contrato: request.body.data_ultimo_contrato,
          qt_que_negativa: request.body.qt_que_negativa,
          doc_negativado: request.body.doc_negativado,
          percentagem_cnpj_negativa: request.body.percentagem_cnpj_negativa,
          data_retorno: request.body.data_retorno,
          dias: request.body.dias,
          status: request.body.status,
          hr_ultimo_contato: request.body.hr_ultimo_contato,
        });
      }
      console.log(emp);
    return response.json(emp);
  
  },

  async update(request, response){
    const emp = await Empresa.findOneAndUpdate({cnpj: request.body.cnpj}, {$set:{
          cnpj: request.body.cnpj,
          valide: request.body.valide,
          representante: request.body.representante,
          razao_social: request.body.razao_social,
          responsavel: request.body.responsavel,
          utiliza: request.body.utiliza,
          qt_consultas: request.body.qt_consultas,
          valor_vcm: request.body.valor_vcm,
          valor_consulta_un: request.body.valor_consulta_un,
          vcm_ofertado: request.body.vcm_ofertado,
          utiliza_negativacao: request.body.utiliza_negativacao,
          valor_gasto_negativacao: request.body.valor_gasto_negativacao,
          valor_pago_negativa: request.body.valor_pago_negativa,
          ddd: request.body.ddd,
          telefone: request.body.telefone,
          ramal: request.body.ramal,
          email: request.body.email,
          ddd2: request.body.ddd2,
          telefone2: request.body.telefone2,
          ramal2: request.body.ramal2,
          email2: request.body.email2,
          observacao: request.body.observacao,
          localizar_cnpj: request.body.localizar_cnpj,
          data_contrato: request.body.data_contrato,
          hora: request.body.hora,
          documento_consulta: request.body.documento_consulta,
          percentagem_cnpj: request.body.percentagem_cnpj,
          negociacao: request.body.negociacao,
          data_ultimo_contrato: request.body.data_ultimo_contrato,
          qt_que_negativa: request.body.qt_que_negativa,
          doc_negativado: request.body.doc_negativado,
          percentagem_cnpj_negativa: request.body.percentagem_cnpj_negativa,
          data_retorno: request.body.data_retorno,
          dias: request.body.dias,
          status: request.body.status,
          hr_ultimo_contato: request.body.hr_ultimo_contato
    }}, {upsert: true}, (err, doc) => {
      if(err){
        console.log("Something wrong when updating data!" + err);
      }
      console.log(doc);
      //console.log({emp});
    });
    return response.json(emp);
  }
 /*
  async destroy(request, response, err){
    
    const existe = await Empresa.findOne(request.params);
    if(existe){
      console.log(existe);
      const emp = await Empresa.deleteOne(request.params);
      return response.json(request.params);
    }else {
      throw new ErrorEvent(err);
    }
    
  }
 */
};
