import React,{useState} from 'react'
import Editable from '../../Editable';


function EmpFullTable({emp}){
  const[cnpj, setCnpj] = useState(emp.cnpj);
  const[razao_social, setRazaoSocial] = useState(emp.razao_social);
  const[nome_fantasia, setNomeFantasia] = useState(emp.nome_fantasia);
  const[representante, setRepresentante] = useState(emp.representante);
  const[responsavel, setResponsavel] = useState(emp.responsavel);
  const[utiliza, setUtiliza] = useState(emp.utiliza);
  const[valor_vcm, setValorVCM] = useState(emp.valor_vcm);
  const[vcm_ofertado, setVCMOfertado] = useState(emp.vcm_ofertado);
  const[valor_concorrencia, setValorConcorrencia] = useState(emp.valor_concorrencia);
  const[valide, setValide] = useState(emp.valide);
  const[cidade, setCidade] = useState(emp.cidade);
  const[status_negociacao, setStatusNegociacao] = useState(emp.status_negociacao);
  const[status_venda, setStatusVenda] = useState(emp.status_venda);
  const[observacao, setObservacao] = useState(emp.observacao);
  const[ddd, setDDD] = useState(emp.ddd);
  const[telefone, setTelefone] = useState(emp.telefone);
  const[usa_pefin, setUsaPefin] = useState(emp.usa_pefin);
  const[data_primeiro_contato, setDataPrimeiroContato] = useState(emp.data_primeiro_contato);
  const[data_ultimo_contato, setDataUltimoContato] = useState(emp.data_ultimo_contato);
  const[data_retorno, setDataRetorno] = useState(emp.data_retorno);

  function handleOnBlur(){

  }


  return(
    
    <tr key={emp.id}>
      <td>
        {emp.cnpj}
      </td>
      <td>
      <Editable text={razao_social} placeholder={razao_social} type="input">
          <input type="text" name="razao_social" placeholder="Razão Social" value={razao_social}
           onChange={e => setRazaoSocial(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={nome_fantasia} placeholder={nome_fantasia} type="input">
          <input type="text" name="nome_fantasia" placeholder="Nome Fantasia" value={nome_fantasia}
           onChange={e => setRazaoSocial(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={representante} placeholder={representante} type="input">
          <input type="text" name="representante" placeholder="Representante" value={representante}
           onChange={e => setRepresentante(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={responsavel} placeholder={responsavel} type="input">
          <input type="text" name="responsavel" placeholder="Responsavel" value={responsavel}
           onChange={e => setResponsavel(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={utiliza} placeholder={utiliza} type="input">
          <input type="text" name="utiliza" placeholder="Utiliza" value={utiliza}
           onChange={e => setUtiliza(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={valor_vcm} placeholder={valor_vcm} type="input">
          <input type="text" name="valor_vcm" placeholder="Valor VCM" value={valor_vcm}
           onChange={e => setValorVCM(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={vcm_ofertado} placeholder={vcm_ofertado} type="input">
          <input type="text" name="vcm_ofertado" placeholder="VCM Ofertado" value={vcm_ofertado}
           onChange={e => setVCMOfertado(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={vcm_ofertado} placeholder={vcm_ofertado} type="input">
          <input type="text" name="vcm_ofertado" placeholder="VCM Ofertado" value={vcm_ofertado}
           onChange={e => setVCMOfertado(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
    </tr>
    
  );
}

export default EmpFullTable;
