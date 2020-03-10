import React, {useState} from 'react';
import './style.css';


function Navigator({onSubmit, onClick ,searchBy}){
  const[data, setData] = useState('');

  async function handleSearchForm(e){
    e.preventDefault();
    
    await onSubmit({
      data,
    });
    
    await onClick({
      data,
    });
    setData('');
  }

  return(
    
      <form className="search-form" onSubmit={handleSearchForm}>
        <div className="search-block">
        <label htmlFor={searchBy}>Pesquisar por {searchBy}:</label>
          {searchBy !== 'valide' && <input 
            name={searchBy}
            id={searchBy} 
            required
            value={data}
            onChange={e => setData(e.target.value)}
            />}
            {searchBy === 'valide' && (
              <select id="valideOptions" onChange={e => setData(e.target.value)}>
                <option value="NÃO ESTÁ VALIDO">NÃO ESTÁ VALIDO</option>
                <option value="VENDA LIBERADA">VENDA LIBERADA</option>
                <option value="ANALISE DE EXCEÇÃO">ANALISE DE EXCEÇÃO</option>
              </select>
            )}
        </div>
        <button type="submit" onClick={handleSearchForm}>Pesquisar</button>
      </form>
    
  );
}

export default Navigator;
