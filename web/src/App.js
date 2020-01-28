import React from 'react';
import {useState, useEffect} from 'react';
import api from './services/api';
import EmpItem from './components/EmpItem';
import EmpForm from './components/EmpForm';
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
  }, []);

  async function handleAddEmp(data){
    const response = await api.post('/clientes', data);
    setEmps([...emps, response.data])
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <EmpForm onSubmit={handleAddEmp}/>
      </aside>
      <main>
      <ul>
        {emps.map(emp => (
         <EmpItem key={emp._id} emp={emp}/>
        ))}
      </ul>
      </main>
    </div>
  );
}

export default App;
