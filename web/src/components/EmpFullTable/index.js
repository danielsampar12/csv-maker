import React,{useState} from 'react'
import Editable from '../Editable';


function EmpFullTable({emp, onChange}){
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

  async function handleOnBlur(e){
    e.preventDefault();
    await onChange({
      cnpj: emp.cnpj,
      razao_social,
      nome_fantasia,
      representante,
      responsavel,
      utiliza,
      valor_vcm,
      vcm_ofertado,
      valor_concorrencia,
      valide,
      cidade,
      status_negociacao,
      status_venda,
      observacao,
      ddd,
      telefone,
      usa_pefin,
      data_primeiro_contato,
      data_ultimo_contato,
      data_retorno,
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
      <Editable text={valor_concorrencia} placeholder={valor_concorrencia} type="input">
          <input type="text" name="valor_concorrencia" placeholder="Valor Concorrência" value={valor_concorrencia}
           onChange={e => setValorConcorrencia(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={valide} placeholder={valide} type="input">
          <input type="text" name="valide" placeholder="Valide" value={valide}
           onChange={e => setValide(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={cidade} placeholder={cidade} type="input">
          <input type="text" name="cidade" placeholder="Cidade" value={cidade}
           onChange={e => setCidade(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={status_negociacao} placeholder={status_negociacao} type="input">
          <input type="text" name="status_negociacao" placeholder="Status Negociacao" value={status_negociacao}
           onChange={e => setStatusNegociacao(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={status_venda} placeholder={status_venda} type="input">
          <input type="text" name="status_venda" placeholder="Status da Venda" value={status_venda}
           onChange={e => setStatusVenda(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={observacao} placeholder={observacao} type="input">
          <input type="text" name="observacao" placeholder="Observação" value={observacao}
           onChange={e => setObservacao(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={ddd} placeholder={ddd} type="input">
          <input type="text" name="ddd" placeholder="DDD" value={ddd}
           onChange={e => setDDD(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={telefone} placeholder={telefone} type="input">
          <input type="text" name="telefone" placeholder="Telefone" value={telefone}
           onChange={e => setTelefone(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={usa_pefin} placeholder={usa_pefin} type="input">
          <input type="text" name="usa_pefin" placeholder="Usa Pefin" value={usa_pefin}
           onChange={e => setUsaPefin(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={data_primeiro_contato} placeholder={data_primeiro_contato} type="input">
          <input type="text" name="data_primeiro_contato" placeholder="Data Primeiro Contato" value={data_primeiro_contato}
           onChange={e => setDataPrimeiroContato(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={data_ultimo_contato} placeholder={data_ultimo_contato} type="input">
          <input type="text" name="data_ultimo_contato" placeholder="Data Último Contato" value={data_ultimo_contato}
           onChange={e => setDataUltimoContato(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
      <td>
      <Editable text={data_retorno} placeholder={data_retorno} type="input">
          <input type="text" name="data_retorno" placeholder="Data Retorno" value={data_retorno}
           onChange={e => setDataRetorno(e.target.value)} onBlur={handleOnBlur}/>
      </Editable>  
      </td>
    </tr>
  );
}

export default EmpFullTable;
