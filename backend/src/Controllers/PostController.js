const Post = require('../models/Post');
const ReadFile = require('../../tmp/uploads/readFile');
const Empresa = require('../models/Empresa');
const fs = require('fs');

module.exports = {
  async store(request, response){
    const {originalname: name, size, filename: key} = request.file; 
    const post = await Post.create({
      name,
      size,
      key,
    });
    const data = ReadFile(key);
    
    data.map(async(record) => {
      const cnpj = record.cnpj;
      let emp = await Empresa.findOne({cnpj});
      if(!emp){
        emp = await Empresa.create({
          cnpj: cnpj,
          valide: record.valide,
          representante: record.representante,
          razao_social: record.razao_social,
          responsavel: record.responsavel,
          utiliza: record.utiliza,
          qt_consultas: record.qt_consultas,
          valor_vcm: record.valor_vcm,
          valor_consulta_un: record.valor_consulta_un,
          vcm_ofertado: record.vcm_ofertado,
          utiliza_negativacao: record.utiliza_negativacao,
          valor_gasto_negativacao: record.valor_gasto_negativacao,
          valor_pago_negativacao: record.valor_pago_negativacao,
          ddd: record.ddd,
          telefone: record.telefone,
          ramal: record.ramal,
          email: record.email,
          ddd2: record.ddd2,
          telefone2: record.telefone2,
          ramal2: record.ramal2,
          email2: record.email2,
          observacao: record.observacao,
          localizar_cnpj: record.localizar_cnpj,
          data_primeiro_contato: record.data_primeiro_contato,
          hora: record.hora,
          documento_consulta: record.documento_consulta,
          percentagem_cnpj_negativa: record.percentagem_cnpj_negativa,
          status_negociacao: record.status_negociacao,
          data_ultimo_contato: record.data_ultimo_contato,
          data_retorno: record.data_retorno,
          status_venda: record.status_venda,
          hora_ultimo_contato: record.hora_ultimo_contato,
          endereco: record.endereco,
          cidade: record.cidade,
          uf: record.uf,
        });
      }
    });
    
    fs.unlink(`${key}`, (err) => {
      if(err) return console.log(err);
      console.log('successfully deleted file: ' + key);
    })
    
    
    return response.json(emp);
  }
};
