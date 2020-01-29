import React from 'react';
import {useState, useEffect} from 'react';
import api from './services/api';
import EmpItem from './components/EmpItem';
import EmpForm from './components/EmpForm';
import DeleteButton from './components/DeleteButton';
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
    const response = await api.post('/clientes', data);
    setEmps([...emps, response.data]);
  }

  async function handleDeleteEmp(data){
    console.log(data)
    await api.delete('/delete', data);
    
    /*let registros = emps.filter((emp) => {
      return emp.cnpj !== data;
    });
    console.log(response);
    console.log(registros);
    //setEmps({re})
    */
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <EmpForm onSubmit={handleAddEmp}/>
        <DeleteButton onSubmit={handleDeleteEmp}/>
      </aside>
      <main>
      <ul>
        {emps.map(emp => (
          
         <EmpItem key={emp._id} emp={emp} onClick={handleDeleteEmp}/>
         
        ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
