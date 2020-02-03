import React, {useState} from 'react';

function EmpForm({onSubmit}){
  const[cnpj, setCnpj] = useState('');
  const[razao_social, setRazaoSocial] = useState('');
  const[nome_fantasia, setNomeFantasia] = useState('');
  const[representante, setRepresentante] = useState('');
  const[responsavel, setResponsavel] = useState('');
  const[valor_vcm, setValorVCM] = useState('');
  const[valide, setValide] = useState('');
  const[endereco, setEndereco] = useState('');
  const[cidade, setCidade] = useState('');
  const[ddd, setDDD] = useState('');
  const[telefone, setTelefone] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    await onSubmit({
      cnpj,
      razao_social,
      nome_fantasia,
      representante,
      responsavel,
      valor_vcm,
      valide,
      endereco,
      ddd,
      telefone,
      cidade,
    });
    setCnpj('');
    setRazaoSocial('');
    setNomeFantasia('');
    setRepresentante('');
    setResponsavel('');
    setValorVCM('');
    setValide('');
    setEndereco('');
    setCidade('');
    setDDD('');
    setTelefone('');
  }

  return(
    <form onSubmit={handleSubmit}>
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
          <label htmlFor="nome_fantasia">Nome Fantasia:</label>
          <input 
            name="nome_fantasia" 
            id="nome_fantasia" 
            required
            value={nome_fantasia}
            onChange={e => setNomeFantasia(e.target.value)}/>
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
          <label htmlFor="valide">Valide:</label>
          <input 
            name="valide" 
            id="valide" 
            required
            value={valide}
            onChange={e => setValide(e.target.value)}/>
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
          
          <div className="input-block">
          <label htmlFor="cidade">Cidade:</label>
          <input 
            name="cidade" 
            id="cidade" 
            required
            value={cidade}
            onChange={e => setCidade(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
            <label htmlFor="ddd">DDD:</label>
            <input 
              name="ddd" 
              id="ddd" 
              required
              value={ddd}
              onChange={e => setDDD(e.target.value)}/>
            </div>

            <div className="input-block">
            <label htmlFor="telefone">Telefone:</label>
            <input 
              name="telefone" 
              id="telefone" 
              required
              value={telefone}
              onChange={e => setTelefone(e.target.value)}/>
            </div>
          </div>
          <button type="submit">Salvar</button>
          <button id="readMore">mais</button>
        </form>
  );
}

export default EmpForm;
