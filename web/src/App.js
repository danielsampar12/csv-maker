import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
          <label htmlFor="cnpj">CNPJ:</label>
          <input name="cnpj" id="cnpj" required/>
          </div>

          <div className="input-block">
          <label htmlFor="razao_social">Razão Social:</label>
          <input name="razao_social" id="razao_social" required/>
          </div>
          
          <div className="input-block">
          <label htmlFor="representante">Representante:</label>
          <input name="representante" id="representante" required/>
          </div>

          <div className="input-block">
          <label htmlFor="responsavel">Responsavel:</label>
          <input name="responsavel" id="responsavel" required/>
          </div>

          <div className="input-block">
          <label htmlFor="valor_vcm">Valor VCM:</label>
          <input name="valor_vcm" id="valor_vcm" required/>
          </div>

          <div className="input-block">
          <label htmlFor="endereco">Endereço:</label>
          <input name="endereco" id="endereco" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
            <label htmlFor="ddd1">DDD:</label>
            <input name="ddd1" id="ddd1" required/>
            </div>

            <div className="input-block">
            <label htmlFor="telefone1">Telefone:</label>
            <input name="telefone1" id="telefone1" required/>
            </div>
          </div>
          <button type="submit">Salvar</button>
          <button id="readMore">mais</button>
        </form>
      </aside>
      <main>


      </main>
    </div>
  );
}

export default App;
