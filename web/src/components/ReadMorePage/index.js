import React,{useState, useEffect} from 'react';
import EmpFullTable from '../EmpFullTable';
import api from '../../services/api';
import './style.css';


function ReadMorePage(){
   const[emps, setEmps] = useState([]);
  function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
  let cnpj = getUrlVars()["cnpj"];
 
  useEffect(() => {
  async function reloadEmps(){
    const response = await api.get('/search', {params: {cnpj: cnpj}});
    setEmps(response.data);
    
    console.log(response.data)
    //setUpWebSocket();
  }
  reloadEmps();
}, []);

async function loadEmps(){
  const response = await api.get('/search', {params: {cnpj: cnpj}});
  setEmps(response.data)
  
}

async function handleEdit(data){
  console.log(data);
  await api.put('/clientes', data);
  loadEmps();
  
  //setEmps
}

async function handleDeleteEmp(){
 
 await api.delete('/clientes', {params: {cnpj: cnpj}});
  loadEmps();
  //setEmps(emps);
}
  
  return(
    <main>
    <table id="search-table">
      <thead>
        
      <tr>
            <th key="cnpjHeader">CNPJ</th>
            <th key="razao_socialHeader">Razão Social</th>
            <th key="nome_fantasiaHeader">Nome fantasia</th>
            <th key="representanteHeader">Representante</th>
            <th key="responsavelHeader">Responsavel</th>
            <th key="utilizaHeader">Utiliza</th>
            <th key="valor_vcmHeader">Valor VCM</th>
            <th key="vcm_ofertadoHeader">VCM Ofertado</th>
            <th key="valor_concorrenciaHeader">Valor Concorrência</th>
            <th key="valideHeader">Valide</th>
            <th key="cidadeHeader">Cidade</th>
            <th key="ufHeader">Estado</th>
            <th key="status_negociacaoHeader">Status da Negociação</th>
            <th key="status_vendaHeader">Status da Venda</th>
            <th key="observacaoHeader">Observação</th>
            <th key="dddHeader">DDD</th>
            <th key="telefoneHeader">Telefone</th>
            <th key="usa_pefinHeader">Usa PEFIN</th>
            <th key="data_primeiro_contatoHeader">Data 1° contato</th>
            <th key="data_ultimo_contatoHeader">Data último contato</th>
            <th key="data_retornoHeader">Data retorno</th>
          </tr>
        
      </thead>
      <tbody>
        {emps.map((emp, index) => (
              <EmpFullTable emp={emp} key={emp.id} onChange={handleEdit}/>
                )).reverse()}
      </tbody>
    </table>
    <button type="delete" 
    onClick={() =>{if(window.confirm('Tem certeza que deseja deletar o registro de CPNJ:' + cnpj + '?')) handleDeleteEmp()}} 
      >Deletar registro do CNPJ: {cnpj}</button>
    </main>
  );
}


export default ReadMorePage;
