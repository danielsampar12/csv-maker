import React, {useState} from 'react';



function Navigator({onClick}){
  const[cnpj, setCnpj] = useState('');

  async function handleSearchForm(e){
    e.preventDefault();
    await onClick({
      cnpj,
    });
  }

  return(
    <nav className="navigator">
      <form className="nav-form">
        <div className="nav-block">
        <label htmlFor="cnpj">Pesquisar por CNPJ:</label>
          <input 
            name="cnpj"
            id="cnpj" 
            required
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
            />
        </div>
        
      </form>
    </nav>
  );
}

export default Navigator;