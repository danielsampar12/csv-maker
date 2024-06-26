import React, {useState} from 'react';
import ReadMore from'./ReadMore';


function EmpForm({onSubmit}){
  const[cnpj, setCnpj] = useState('');
  const[razao_social, setRazaoSocial] = useState('');
  const[nome_fantasia, setNomeFantasia] = useState('');
  const[representante, setRepresentante] = useState('');
  const[utiliza, setUtiliza] = useState('');
  const[valor_vcm, setValorVCM] = useState('');
  const[valide, setValide] = useState('');
  const[status_negociacao, setStatusNegociacao] = useState('');
  const[observacao, setObservacao] = useState('');
  const[cidade, setCidade] = useState('');
  const[uf, setUf] = useState('');
  const[ddd, setDDD] = useState('');
  const[telefone, setTelefone] = useState('');
  const[valor_concorrencia, setValorConcorrencia] = useState('');
  const[data_ultimo_contato, setDataUltimoContato] = useState('');
  const[status_venda, setStatusVenda] = useState('');
  const[expand, setExpand] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    await onSubmit({
      cnpj,
      razao_social,
      nome_fantasia,
      representante,
      utiliza,
      valor_vcm,
      valide,
      status_negociacao,
      observacao,
      ddd,
      telefone,
      cidade,
      uf,
      valor_concorrencia,
      data_ultimo_contato,
      status_venda,
    });
    setCnpj('');
    setRazaoSocial('');
    setNomeFantasia('');
    setRepresentante('');
    setUtiliza('');
    setValorVCM('');
    setValide('');
    setStatusNegociacao('');
    setObservacao('');
    setCidade('');
    setUf('');
    setDDD('');
    setTelefone('');
    setValorConcorrencia('');
    setDataUltimoContato('');
    setStatusVenda('');
  }

  function handleReadMore(){
    if(!expand){
      setExpand(true);
    }else{
      setExpand(false);
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="input-group">
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
          <label htmlFor="utiliza">Utiliza:</label>
          <input
            name="utiliza" 
            id="utiliza" 
            required
            value={utiliza}
            onChange={e => setUtiliza(e.target.value)}/>
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
          <label htmlFor="cidade">Cidade:</label>
          <input 
            name="cidade" 
            id="cidade" 
            required
            value={cidade}
            onChange={e => setCidade(e.target.value)}/>
          </div>

          <div className="input-block">
          <label htmlFor="status_negociacao">Status de Negociação:</label>
          <input 
            name="status_negociacao" 
            id="status_negociacao" 
            required
            value={status_negociacao}
            onChange={e => setStatusNegociacao(e.target.value)}/>
          </div>

          <div className="input-block">
          <label htmlFor="observacao">Observação:</label>
          <input 
            name="observacao" 
            id="observacao" 
            required
            value={observacao}
            onChange={e => setObservacao(e.target.value)}/>
          </div>

          <div className="input-group-telefone">
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
          <div  className="input-block">
            <label htmlFor="valor_concorrencia">Valor Concorrencia:</label>
            <input name="valor_concorrencia" id="valor_concorrencia" required value={valor_concorrencia} onChange={e => setValorConcorrencia(e.target.value)}/>
            </div>
            <div  className="input-block">
            <label htmlFor="data_ultimo_contato">Data Último Contato:</label>
            <input name="data_ultimo_contato" id="data_ultimo_contato" required value={data_ultimo_contato} onChange={e => setDataUltimoContato(e.target.value)}/>
            </div>
            <div  className="input-block">
            <label htmlFor="status_venda">Status da Venda:</label>
            <input name="status_venda" id="status_venda" required value={status_venda} onChange={e => setStatusVenda(e.target.value)}/>
            </div>
            <div  className="input-block">
            <label htmlFor="uf">Estado:</label>
            <input name="uf" id="uf" required value={uf} onChange={e => setUf(e.target.value)}/>
            </div>
          <div className="input-block">
            <ReadMore expand={expand} onSubmit={handleSubmit}/>
          </div>

        </div>
          <div className="buttons">
          <button type="submit">Salvar</button>
          <button id="readMore" onClick={handleReadMore}>mais</button>
          </div>
      
        </form>
  );
}

export default EmpForm;
