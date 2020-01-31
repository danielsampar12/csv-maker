import React,{useState} from 'react';
import './style.css'

function EditButton({emp, onClick}){
  const[razao_social, setRazaoSocial] = useState('');
  const[representante, setRepresentante] = useState('');
  const[responsavel, setResponsavel] = useState('');
  //eslint-disable-next-line
  const[valor_vcm, setValorVCM] = useState('');
  //eslint-disable-next-line
  const[endereco, setEndereco] = useState('');
  //eslint-disable-next-line
  const[cidade, setCidade] = useState('');
  //eslint-disable-next-line
  const[ddd, setDDD] = useState('');
  //eslint-disable-next-line
  const[telefone, setTelefone] = useState('');
  const[expanded, setExpanded] = useState(false);
  
  function handleEditSubmit(e){

  }

  function expandedText(){
    if(expanded == false){
      setExpanded(true);
    }else{
      setExpanded(false);
    }
  }
  
  function getMoreTextDiv(){
    if(expanded){
      return <form action="update">
              <strong>Você está editando o registro do CNPJ: {emp.cnpj}</strong>
                <div className="expanded-content">
                <label htmlFor="razao_social">Razão Social:</label>
                <input name="razao_social" id="razao_social" required value={razao_social} onChange={e => setRazaoSocial(e.target.value)}/>
                </div>
                <div className="expanded-content">
                <label htmlFor="representante">Representante:</label>
                <input name="representante" id="representante" required value={representante} onChange={e => setRepresentante(e.target.value)}/>
                </div>
                <div className="expanded-content">
                <label htmlFor="responsavel">Responsavel:</label>
                <input name="responsavel" id="responsavel" required value={responsavel} onChange={e => setResponsavel(e.target.value)}/>
                </div>
                <div className="expanded-content">
                <label htmlFor="valor_vcm">Valor VCM:</label>
                <input name="valor_vcm" id="valor_vcm" required value={valor_vcm} onChange={e => setValorVCM(e.target.value)}/>
                </div>
                <div className="expanded-content">
                <label htmlFor="endereco">Endereco:</label>
                <input name="endereco" id="endereco" required value={endereco} onChange={e => setEndereco(e.target.value)}/>
                </div>
                <div className="expanded-content">
                <label htmlFor="cidade">Cidade:</label>
                <input name="cidade" id="cidade" required value={cidade} onChange={e => setCidade(e.target.value)}/>
                </div>
                <div className="expanded-group">
                <div className="expanded-content">
                <label htmlFor="ddd">DDD:</label>
                <input name="ddd" id="ddd" required value={ddd} onChange={e => setDDD(e.target.value)}/>
                </div>
                <div className="expanded-content">
                <label htmlFor="telefone">Telefone:</label>
                <input name="telefone" id="telefone" required value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </div>
                </div>
            </form>
    }else{
      return null;
    }
  }
  let expandedDiv = getMoreTextDiv();
  return(
    <div>
      <button id="editButton" onClick={expandedText}>Edit</button>
      {expandedDiv}
    </div>
  );
}

export default EditButton;
