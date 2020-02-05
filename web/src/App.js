import React from 'react';
import {useState, useEffect} from 'react';
import api from './services/api';

import EmpForm from './components/EmpForm';
import DeleteButton from './components/DeleteButton';

import EmpTable from './components/EmpTable';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const[emps, setEmps] = useState([]);

  useEffect(() => {
    async function loadEmps(){
      const response = await api.get('/clientes');
      setEmps(response.data);
    }
    loadEmps();

  }, [emps]);

  async function handleAddEmp(data){
    console.log(data);
    const response = await api.post('/clientes', data);
    setEmps([...emps, response.data]);
  }

  async function handleDeleteEmp(data){
    console.log(data);
    api.delete('/clientes', {params: {cnpj: data.cnpj}});
  }
  
  async function handleEditEmp(data){
    console.log(data);
    const response = await api.put('/edit', data);
    //setEmps
  }



  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <EmpForm onSubmit={handleAddEmp}/>
        
      </aside>
      <main>
        
          <h1>Clientes RDSampar</h1>
          <table id="empresas">
            <thead>
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
                <th key="telefoneHeader">(DDD)Telefone</th>
                
              </tr>
            </thead>
              {emps.map((emp, index) => (
                  <tbody>
                    <EmpTable emp={emp} key={index}/>
                    
                  </tbody>
              ))}
        </table>
      </main>
    </div>
  );
}

export default App;
