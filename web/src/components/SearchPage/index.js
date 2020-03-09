import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import Navigator from '../Navigator';
import EmpFullTable from '../EmpFullTable';
import mongoose from 'mongoose';
import './style.css';


function SearchPage(){
  const[emps, setEmps] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function reloadEmps(){
      const response = await api.get('/clientes');
      setEmps(response.data);
    }
    reloadEmps();
  }, []);

  async function loadEmps(emp){
    if(isSearching){
      const response = await api.get('/search', {params: {cnpj: emp.data.cnpj}});
      const arrayNovo = [response.data]
      setEmps(arrayNovo);
    }else{
      const response = await api.get('/clientes');
      setEmps(response.data);
    }
  }

  async function handleEdit(data){
    console.log(data);
    const emp = await api.put('/clientes', data);
    loadEmps(emp);
  }

  async function handleSearchByCnpj(data){
    const response = await api.get('/search', {params: {cnpj: data.data}});
    setEmps(response.data);
  }
  
  async function handleSearchByRepresentante(data){
    const response = await api.get('/searchByRepresentante', {params: {representante: data.data}});
    setEmps(response.data);
  }

  async function handleSearchByStatusNegociacao(data){
    const response = await api.get('/searchByStatusNegociacao', {params: {status_negociacao: data.data}});
    setEmps(response.data);
  }

  async function handleSearchByValide(data){
    const response = await api.get('/searchByValide', {params: {valide: data.data}});
    setEmps(response.data);
  }

  async function handleSearchByCidade(data){
    const response = await api.get('/searchByCidade', {params: {cidade: data.data}});
    setEmps(response.data);
  }

  async function handleSearchByUf(data){
    const response = await api.get('/searchByUf', {params: {uf: data.data}});
    setEmps(response.data);
  }


  function handleChooseSearchBy(data){
    setIsSearching(true);
    if(searchBy === 'cnpj'){
      handleSearchByCnpj(data);
    }else if(searchBy === 'representante'){
      handleSearchByRepresentante(data);
    }else if(searchBy === 'status_negociacao'){
      handleSearchByStatusNegociacao(data);
    }else if(searchBy === 'valide'){
      handleSearchByValide(data);
    }else if(searchBy === 'cidade'){
      handleSearchByCidade(data);
    }else if(searchBy === 'uf'){
      handleSearchByUf(data);
    }else{
      window.alert('Escolha um parâmetro de pesquisa.');
    }

  }

  return(
    <>
    <aside>
      <div id="nav">
        <Navigator searchBy={searchBy} onSubmit={handleChooseSearchBy} onClick={handleChooseSearchBy}/>
        <select id="searchBy" onChange={e => setSearchBy(e.target.value)}>
          <option value=""></option>
          <option value="cnpj">CNPJ</option>
          <option value="representante">Representante</option>
          <option value="status_negociacao">Status De Negociação</option>
          <option value="valide">Valide</option>
          <option value="cidade">Cidade</option>
          <option value="uf">Estado</option>
        </select>
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
                <EmpFullTable emp={emp} key={emp._id} onChange={handleEdit}/>
                )).reverse()}
      </tbody>
    </table>
    </main>
  </>
  );
}

export default SearchPage;
