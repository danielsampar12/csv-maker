import React,{useState} from 'react';
import './style.css';
import Editable from '../Editable';


function EmpTable({emp, onChange}){
  
  const[razao_social, setRazaoSocial] = useState(emp.razao_social);
  const[nome_fantasia, setNomeFantasia] = useState(emp.nome_fantasia);
  const[representante, setRepresentante] = useState(emp.representante);
  const[utiliza, setUtiliza] = useState(emp.utiliza);
  const[valor_vcm, setValorVCM] = useState(emp.valor_vcm);
  const[valide, setValide] = useState(emp.valid);
  const[cidade, setCidade] = useState(emp.cidade);
  const[observacao, setObservacao] = useState(emp.observacao);
  const[status_negociacao, setStatusNegociacao] = useState(emp.status_negociacao);
  const[ddd, setDDD] = useState(emp.ddd);
  const[telefone, setTelefone] = useState(emp.telefone);


  async function handleOnChange(e){
    e.preventDefault();
    
    await onChange({
      cnpj: emp.cnpj,
      razao_social,
      nome_fantasia,
      representante,
      utiliza,
      valor_vcm,
      valide,
      cidade,
      observacao,
      status_negociacao,
      ddd,
      telefone,
    });
  }

  return(
    
    <tr key={emp.id}>
      <td>
        {emp.cnpj}
      </td>
      <td>
      <Editable text={razao_social} placeholder={razao_social} type="input">
          <input type="text" name="razao_social" placeholder="Razão Social" value={razao_social}
           onChange={e => setRazaoSocial(e.target.value)} onBlur={handleOnChange}/>
      </Editable>  
      </td>
      <td>
        <Editable text={nome_fantasia} placeholder={nome_fantasia} type="input">
          <input type="text" name="nome_fantasia" placeholder="nome_fantasia" value={nome_fantasia}
           onChange={e => setNomeFantasia(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={representante} placeholder={representante} type="input">
          <input type="text" name="representante" placeholder="representante" value={representante}
           onChange={e => setRepresentante(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={utiliza} placeholder={utiliza} type="input">
          <input type="text" name="utiliza" placeholder="utiliza" value={utiliza}
           onChange={e => setUtiliza(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={valor_vcm} placeholder={valor_vcm} type="input">
          <input type="text" name="valor_vcm" placeholder="valor_vcm" value={valor_vcm}
           onChange={e => setValorVCM(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={valide} placeholder={valide} type="input">
          <input type="text" name="valide" placeholder="valide" value={valide}
           onChange={e => setValide(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={cidade} placeholder={cidade} type="input">
          <input type="text" name="cidade" placeholder="cidade" value={cidade}
           onChange={e => setCidade(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={status_negociacao} placeholder={status_negociacao} type="input">
          <input type="text" name="status_negociacao" placeholder="status_negociacao" value={status_negociacao}
           onChange={e => setStatusNegociacao(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={observacao} placeholder={observacao} type="input">
          <input type="text" name="observacao" placeholder="observacao" value={observacao}
           onChange={e => setObservacao(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={ddd} placeholder={ddd} type="input">
          <input type="text" name="ddd" placeholder="ddd" value={ddd}
           onChange={e => setDDD(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      <td>
        <Editable text={telefone} placeholder={telefone} type="input">
          <input type="text" name="telefone" placeholder="telefone" value={telefone}
           onChange={e => setTelefone(e.target.value)} onBlur={handleOnChange}/>
        </Editable>
      </td>
      
    </tr>
    
  );
}

export default EmpTable;
