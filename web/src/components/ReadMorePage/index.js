import React,{useState, useEffect} from 'react';
import EmpFullTable from '../EmpFullTable';
import api from '../../services/api';
import './style.css';
import Info from  '../Info';

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
  }
  reloadEmps();
}, []);

async function loadEmps(){
  const response = await api.get('/search', {params: {cnpj: cnpj}});
  setEmps(response.data)
}

async function handleEdit(data){
  await api.put('/clientes', data);
  loadEmps();
}

async function handleDeleteEmp(){
 
 await api.delete('/clientes', {params: {cnpj: cnpj}});
  loadEmps();
}
  
  return(
    <main>
    {emps.map((emp, index) => (
      
      <Info emp={emp} key={index} onChange={handleEdit}/>
      
    ))}
    <button type="delete" 
    onClick={() =>{if(window.confirm('Tem certeza que deseja deletar o registro de CPNJ:' + cnpj + '?')) handleDeleteEmp()}} 
      >Deletar registro do CNPJ: {cnpj}</button>
    </main>
  );
}


export default ReadMorePage;
