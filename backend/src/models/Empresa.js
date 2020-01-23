const mongoose = require('mongoose');


const EmpresaSchema = new mongoose.Schema({
  cnpj: String,
  valide: String,
  representante: String,
  razao_social: String,
  responsavel: String,
  utiliza: String,
  qt_consultas: Number,
  valor_vcm: String,
  valor_consulta_un: String,
  vcm_ofertado: Number,
  utiliza_negativacao: String,
  valor_gasto_negativacao: Number,
  valor_pago_negativa: Number,
  ddd: String,
  telefone: String,
  ramal: Number,
  email: String,
  ddd2: String,
  telefone2: String,
  ramal2: Number,
  email2: String,
  observacao: String,
  localizar_cnpj: Number,
  data_contrato: Date,
  hora: String,
  documento_consulta: String,
  percentagem_cnpj: Number,
  negociacao: String,
  data_ultimo_contrato: Date,
  qt_que_negativa: Number,
  doc_negativado: String,
  percentagem_cnpj_negativa: Number,
  data_retorno: Date,
  dias: Number,
  status: String,
  hr_ultimo_contato: String,
  
});

module.exports = mongoose.model('Empresa', EmpresaSchema);