import React,{useState} from 'react';
//import './style.css'

function EditButton({emp, onSubmit}){
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
  const[expanded, setExpanded] = useState(false);
  
  async function handleEditSubmit(e){
    e.preventDefault()
    await onSubmit({
      cnpj: emp.cnpj,
      razao_social,
      nome_fantasia,
      representante,
      responsavel,
      valor_vcm,
      valide,
      endereco,
      cidade,
      ddd,
      telefone,
    });
    setExpanded(false);
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

  function expandedText(){
    if(expanded === false){
      setExpanded(true);
    }else{
      setExpanded(false);
    }
  }
  
  function getMoreTextDiv(expanded){
    if(expanded){
      return <form onSubmit={handleEditSubmit}>
              <strong>Você está editando o registro do CNPJ: {emp.cnpj}</strong>
              <div className="input-block">
              <label htmlFor="razao_social">Razão Social</label>
              <input name="razao_social"id="razao_social" required value={razao_social} onChange={e => setRazaoSocial(e.target.value)}/>
              </div>
              <div className="input-block">
              <label htmlFor="razao_social">Razão Social</label>
              <input name="razao_social"id="razao_social" required value={razao_social} onChange={e => setRazaoSocial(e.target.value)}/>
              </div>
            </form>
    }else{
      return null;
    }
  }
  let expandedDiv = getMoreTextDiv(expanded);
  return(
    <div>
      <button id="editButton" onClick={expandedText}>Edit</button>
      {expandedDiv}
    </div>
  );
}

export default EditButton;
