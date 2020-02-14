import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import Navigator from '../Navigator';
import EmpFullTable from '../EmpFullTable';
import mongoose from 'mongoose';
import './style.css';


function SearchPage(){
  const[emps, setEmps] = useState([]);
 

  useEffect(() => {
    async function reloadEmps(){
      const response = await api.get('/clientes');
      setEmps(response.data);
      console.log(response.data)
      //setUpWebSocket();
    }
    reloadEmps();
  }, []);

  async function loadEmps(){
    const response = await api.get('/clientes');
    setEmps(response.data)
  }

  async function handleEdit(data){
    console.log(data);
    await api.put('/clientes', data);
    loadEmps();
    
    //setEmps
  }

  async function handleSearchByCnpj(data){
    console.log(data)
    const response = await api.get('/search', {params: {cnpj: data.data}});
    console.log(response.data);
    if(response.data){
      setEmps([response.data]);
    }else{
      return window.alert('CNPJ: ' + data.data + ' não encontrado');
    }
  }
  
  async function handleSearchByRepresentante(data){
    console.log(data);
    const response = await api.get('/searchByRepresentante', {params: {representante: data.data}})
    console.log(response.data);
    if(response.data){
      setEmps([response.data]);
    }else{
      return window.alert('Representante ' + data.data + ' não encontrado');
    }
  }

  return(
    <>
    <aside>
      <div id="nav">
      <Navigator searchBy={'cnpj'} onSubmit={handleSearchByCnpj}/>
      <Navigator searchBy={'representante'} onSubmit={handleSearchByRepresentante}/>
      </div>
    </aside>
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
      {emps.map((emp, index) => (
                  <tbody key={index}>
                    
                    <EmpFullTable emp={emp} key={emp.id} onChange={handleEdit}/>
                    
                  </tbody>
              )).reverse()}
    </table>
    </main>
  </>
  );
}

export default SearchPage;
