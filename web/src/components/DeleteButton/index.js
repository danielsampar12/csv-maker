import React, {useState} from 'react';
import './style.css';

function DeleteButton({onSubmit}){
  const [cnpj, setCnpj] = useState('');
  
  async function handleOnClick(e){
    e.preventDefault();
    await onSubmit({
      cnpj: cnpj
    });
    setCnpj('');
  }

  return(
    <form onSubmit={handleOnClick}>
      <label htmlFor="cnpjDelete">Deletar por CNPJ:</label>
      <input 
        name="cnpjDelete" 
        id="cnpjDelete" 
        required
        value={cnpj}
        onChange={e => setCnpj(e.target.value)}/>
        <button type="submit">Delete</button>
    </form>
  );
}

export default DeleteButton;

