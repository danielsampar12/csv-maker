import React from 'react';
import {useState, useEffect} from 'react';
import api from './services/api';
import EmpItem from './components/EmpItem';
import EmpForm from './components/EmpForm';
import DeleteButton from './components/DeleteButton';
import EditButton from './components/EditButton'
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
      <ul>
        {emps.map((emp, index) => (
        <>
          <EmpItem key={emp._id} emp={emp}/>
          <div className="buttons">
          <DeleteButton key={index} emp={emp} onClick={handleDeleteEmp}/>
          <EditButton emp={emp} onSubmit={handleEditEmp}/>
          </div>
        </>
        ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
