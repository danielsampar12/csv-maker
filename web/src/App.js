import React, {useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



function App() {
  const[cnpj, setCnpj] = useState('');
  const[razao_social, setRazaoSocial] = useState('');
  const[representante, setRepresentante] = useState('');
  const[responsavel, setResponsavel] = useState('');
  const[valor_vcm, setValorVCM] = useState('');
  const[endereco, setEndereco] = useState('');
  const[ddd1, setDDD1] = useState('');
  const[telefone1, setTelefone1] = useState('');

  async function handleAddEmp(e){
    e.preventDefault();
    

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddEmp}>
          <div className="input-block">
          <label htmlFor="cnpj">CNPJ:</label>
          <input 
            name="cnpj"
            id="cnpj" 
            required
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
            />
          </div>

          <div className="input-block">
          <label htmlFor="razao_social">Razão Social:</label>
          <input 
            name="razao_social" 
            id="razao_social" 
            required
            value={razao_social}
            onChange={e => setRazaoSocial(e.target.value)}/>
          </div>
          
          <div className="input-block">
          <label htmlFor="representante">Representante:</label>
          <input 
            name="representante" 
            id="representante" 
            required
            value={representante}
            onChange={e => setRepresentante(e.target.value)}/>
          </div>

          <div className="input-block">
          <label htmlFor="responsavel">Responsavel:</label>
          <input
            name="responsavel" 
            id="responsavel" 
            required
            value={responsavel}
            onChange={e => setResponsavel(e.target.value)}/>
          </div>

          <div className="input-block">
          <label htmlFor="valor_vcm">Valor VCM:</label>
          <input 
            name="valor_vcm" 
            id="valor_vcm" 
            required
            value={valor_vcm}
            onChange={e => setValorVCM(e.target.value)}/>
          </div>

          <div className="input-block">
          <label htmlFor="endereco">Endereço:</label>
          <input 
            name="endereco" 
            id="endereco" 
            required
            value={endereco}
            onChange={e => setEndereco(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
            <label htmlFor="ddd1">DDD:</label>
            <input 
              type="number" 
              name="ddd1" 
              id="ddd1" 
              required
              value={ddd1}
              onChange={e => setDDD1(e.target.value)}/>
            </div>

            <div className="input-block">
            <label htmlFor="telefone1">Telefone:</label>
            <input 
              type="number" 
              name="telefone1" 
              id="telefone1" 
              required
              value={telefone1}
              onChange={e => setTelefone1(e.target.value)}/>
            </div>
          </div>
          <button type="submit">Salvar</button>
          <button id="readMore">mais</button>
        </form>
      </aside>
      <main>
      <ul>
        <li className="emp-item">
          <header>
            <div className="emp-info">
              <strong>Razão Social Da Empresa</strong>
              <span>CPNJ</span>
            </div>
          </header>
          <p>Valor VCM</p>
          <p>Representante</p>
          <p>Responsavel</p>
          <p>DDD1 + Telefone1</p>
          <a href="">Ler mais</a>
        </li>

        <li className="emp-item">
          <header>
            <div className="emp-info">
              <strong>Razão Social Da Empresa</strong>
              <span>CPNJ</span>
            </div>
          </header>
          <p>Valor VCM</p>
          <p>Representante</p>
          <p>Responsavel</p>
          <p>DDD1 + Telefone1</p>
          <a href="">Ler mais</a>
        </li>
      </ul>
      </main>
    </div>
  );
}

export default App;
