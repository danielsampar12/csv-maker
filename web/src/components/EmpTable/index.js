import React,{useState, useEffect} from 'react';
import './style.css';
import Editable from '../Editable';


function EmpTable({emp, onChange}){
  
  const[razao_social, setRazaoSocial] = useState('');
  const[nome_fantasia, setNomeFantasia] = useState('');
  const[representante, setRepresentante] = useState('');
  const[utiliza, setUtiliza] = useState('');
  const[valor_vcm, setValorVCM] = useState('');
  const[valide, setValide] = useState('');
  const[cidade, setCidade] = useState('');
  const[observacao, setObservacao] = useState('');
  const[status_negociacao, setStatusNegociacao] = useState();
  const[ddd, setDDD] = useState('');
  const[telefone, setTelefone] = useState('');
  const[change, setChange] = useState('');
  
  useEffect(()=>{
    setRazaoSocial(emp.razao_social);
    setNomeFantasia(emp.nome_fantasia);
    setRepresentante(emp.representante);
    setUtiliza(emp.utiliza);
    setValorVCM(emp.valor_vcm);
    setValide(emp.valide);
    setCidade(emp.cidade);
    setObservacao(emp.observacao);
    setStatusNegociacao(emp.status_negociacao);
    setDDD(emp.ddd);
    setTelefone(emp.telefone);
  },[change]);

  async function handleOnChange(e){
    e.preventDefault();
    setChange(change + 1);
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
    setRazaoSocial('');
    setNomeFantasia('');
    setRepresentante('');
    setUtiliza('');
    setValorVCM('');
    setValide('');
    setCidade('');
    setObservacao('');
    setStatusNegociacao('');
    setDDD('');
    setTelefone('');
    setChange(change + 1);
  }

  return(
    
    <tr key={emp.id}>
      <td>
        {emp.cnpj}
      </td>
      <td>
        <Editable text={razao_social} placeholder={razao_social} type="input">
          <input type="text" name="razao_social" placeholder="razao_social" value={razao_social}
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
