import React, {useState} from 'react';
import './style.css';


function Navigator({onSubmit, searchBy}){
  const[data, setData] = useState('');

  async function handleSearchForm(e){
    e.preventDefault();
    
    await onSubmit({
      data,
    });
    setData('');
  }

  return(
    
      <form className="search-form" onSubmit={handleSearchForm}>
        <div className="search-block">
        <label htmlFor={searchBy}>Pesquisar por {searchBy}:</label>
          <input 
            name={searchBy}
            id={searchBy} 
            required
            value={data}
            onChange={e => setData(e.target.value)}
            />
        </div>
        <button type="submit">Pesquisar</button>
      </form>
    
  );
}

export default Navigator;