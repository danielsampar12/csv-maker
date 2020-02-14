import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import Navigator from './Navigator';
import EmpTable from '../EmpTable';
import mongoose from 'mongoose';


function SearchPage(){
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
    async function loadEmp(){
      const response = await api.get('/search', {params: {cnpj: cnpj}})
      console.log(response.data);
      
      setEmps([response.data]);
      console.log(emps)
      
    }
    loadEmp()
  }, []);

  async function handleSearch(data){
  }
  
  return(
    
    <main>
    <table className="search-table">
      <thead>
        <th>
          <tr>
            <th key="cnpjHeader">CNPJ</th>
            <th key="razao_socialHeader">Razão Social</th>
            <th key="nome_fantasiaHeader">Nome fantasia</th>
            <th key="representanteHeader">Representante</th>
            <th key="utilizaHeader">Utiliza</th>
            <th key="valor_vcmHeader">Valor VCM</th>
            <th key="valideHeader">Valide</th>
            <th key="cidadeHeader">Cidade</th>
            <th key="status_negociacaoHeader">Status da Negociação</th>
            <th key="observacaoHeader">Observação</th>
            <th key="dddHeader">DDD</th>
            <th key="telefoneHeader">Telefone</th>
          </tr>
        </th>
      </thead>
      {emps.map((emp, index) => (
                  <tbody key={index}>
                    <EmpTable emp={emp} key={emp.id} />
                  </tbody>
              )).reverse()}
    </table>
    </main>
    
  );
}

export default SearchPage;
