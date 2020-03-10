import React,{useState} from 'react';
import Editable from '../Editable';
import {Link} from 'react-router-dom';
// import { Container } from './styles';
import './style.css';


function Info({emp, onChange}){

  const [razao_social, setRazaoSocial] = useState(emp.razao_social);
  const[nome_fantasia, setNomeFantasia] = useState(emp.nome_fantasia);
  const[representante, setRepresentante] = useState(emp.representante);
  const[responsavel, setResponsavel] = useState(emp.responsavel);
  const[utiliza, setUtiliza] = useState(emp.utiliza);
  const[valor_vcm, setValorVCM] = useState(emp.valor_vcm);
  const[vcm_ofertado, setVCMOfertado] = useState(emp.vcm_ofertado);
  const[valor_concorrencia, setValorConcorrencia] = useState(emp.valor_concorrencia);
  const[valide, setValide] = useState(emp.valide);
  const[cidade, setCidade] = useState(emp.cidade);
  const[uf, setUf] = useState(emp.uf);
  const[status_negociacao, setStatusNegociacao] = useState(emp.status_negociacao);
  const[status_venda, setStatusVenda] = useState(emp.status_venda);
  const[observacao, setObservacao] = useState(emp.observacao);
  const[bureau, setBureau] = useState(emp.bureau);
  const[ddd, setDDD] = useState(emp.ddd);
  const[telefone, setTelefone] = useState(emp.telefone);
  const[usa_pefin, setUsaPefin] = useState(emp.usa_pefin);
  const[data_primeiro_contato, setDataPrimeiroContato] = useState(emp.data_primeiro_contato);
  const[data_ultimo_contato, setDataUltimoContato] = useState(emp.data_ultimo_contato);
  const[data_retorno, setDataRetorno] = useState(emp.data_retorno);

  async function handleOnChange(e){
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
      uf,
      status_negociacao,
      status_venda,
      observacao,
      bureau,
      ddd,
      telefone,
      usa_pefin,
      data_primeiro_contato,
      data_ultimo_contato,
      data_retorno,
    });
  }

  return (
    <form className="empresa">
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="cnpj">CNPJ: </label>
          <p>{emp.cnpj}</p>
          <span className="nao-editavel">*não editável</span>
        </div>
        <div className="input-block">
          <label htmlFor="razao_socail">Razão Social: </label>
          <Editable text={razao_social} placeholder={razao_social} type="input">
            <input type="text" name="razao_social" placeholder="Razão Social" value={razao_social}
            onChange={e => setRazaoSocial(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="nome_fantasia">Nome Fantasia: </label>
          <Editable text={nome_fantasia} placeholder={nome_fantasia} type="input">
            <input type="text" name="nome_fantasia" placeholder="Nome Fantasia" value={nome_fantasia}
            onChange={e => setNomeFantasia(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="representante">Representante: </label>
          <Editable text={representante} placeholder={representante} type="input">
            <input type="text" name="representante" placeholder="Representante" value={representante}
            onChange={e => setRepresentante(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="responsavel">Responsavel: </label>
          <Editable text={responsavel} placeholder={responsavel} type="input">
            <input type="text" name="responsavel" placeholder="Responsavel" value={responsavel}
            onChange={e => setResponsavel(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="utiliza">Utiliza: </label>
          <Editable text={utiliza} placeholder={utiliza} type="input">
            <input type="text" name="utiliza" placeholder="Responsavel" value={utiliza}
            onChange={e => setUtiliza(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="valor_vcm">Valor VCM: </label>
          <Editable text={valor_vcm} placeholder={valor_vcm} type="input">
            <input type="text" name="valor_vcm" placeholder="Valor VCM" value={valor_vcm}
            onChange={e => setValorVCM(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="vcm_ofertado">VCM Ofertado: </label>
          <Editable text={vcm_ofertado} placeholder={vcm_ofertado} type="input">
            <input type="text" name="vcm_ofertado" placeholder="VCM Ofertado" value={vcm_ofertado}
            onChange={e => setVCMOfertado(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="valor_concorrencia">Valor Concorrência: </label>
          <Editable text={valor_concorrencia} placeholder={valor_concorrencia} type="input">
            <input type="text" name="valor_concorrencia" placeholder="Valor Concorrência" value={valor_concorrencia}
            onChange={e => setValorConcorrencia(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="valide">Valide: </label>
          <Editable text={valide} placeholder={valide} type="input">
            <input type="text" name="valide" placeholder="Valide" value={valide}
            onChange={e => setValide(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="cidade">Cidade: </label>
          <Editable text={cidade} placeholder={cidade} type="input">
            <input type="text" name="cidade" placeholder="Cidade" value={cidade}
            onChange={e => setCidade(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="uf">UF: </label>
          <Editable text={uf} placeholder={uf} type="input">
            <input type="text" name="uf" placeholder="UF" value={uf}
            onChange={e => setUf(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="status_negociacao">Status da Negociação: </label>
          <Editable text={status_negociacao} placeholder={status_negociacao} type="input">
            <input type="text" name="status_negociacao" placeholder="Status da Negociação" value={status_negociacao}
            onChange={e => setStatusNegociacao(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="status_venda">Status da Venda: </label>
          <Editable text={status_venda} placeholder={status_venda} type="input">
            <input type="text" name="status_venda" placeholder="Status da Venda" value={status_venda}
            onChange={e => setStatusVenda(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="usa_pefin">Usa Pefin? </label>
          <Editable text={usa_pefin} placeholder={usa_pefin} type="input">
            <input type="text" name="usa_pefin" placeholder="Usa Pefin?" value={usa_pefin}
            onChange={e => setUsaPefin(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="bureau">Bureau: </label>
          <Editable text={bureau} placeholder={bureau} type="input">
            <input type="text" name="bureau" placeholder="Bureau" value={bureau}
            onChange={e => setBureau(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="ddd">DDD: </label>
          <Editable text={ddd} placeholder={ddd} type="input">
            <input type="text" name="ddd" placeholder="DDD" value={ddd}
            onChange={e => setDDD(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="telefone">Telefone: </label>
          <Editable text={telefone} placeholder={telefone} type="input">
            <input type="text" name="telefone" placeholder="Telefone" value={telefone}
            onChange={e => setTelefone(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="data_primeiro_contato">Data Primeiro Contato: </label>
          <Editable text={data_primeiro_contato} placeholder={data_primeiro_contato} type="input">
            <input type="text" name="data_primeiro_contato" placeholder="Data Primeiro Contato" value={data_primeiro_contato}
            onChange={e => setDataPrimeiroContato(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="data_ultimo_contato">Data Ultimo Contato: </label>
          <Editable text={data_ultimo_contato} placeholder={data_ultimo_contato} type="input">
            <input type="text" name="data_ultimo_contato" placeholder="Data Ultimo Contato" value={data_ultimo_contato}
            onChange={e => setDataUltimoContato(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
        <div className="input-block">
          <label htmlFor="data_retorno">Data Retorno: </label>
          <Editable text={data_retorno} placeholder={data_retorno} type="input">
            <input type="text" name="data_retorno" placeholder="Data Retorno" value={data_retorno}
            onChange={e => setDataRetorno(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
      </div>
      <div className="observacao">
          <label htmlFor="observacao">Observação: </label>
          <Editable text={observacao} placeholder={observacao} type="input">
            <input type="text" name="observacao" placeholder="Observação" value={observacao}
            onChange={e => setObservacao(e.target.value)} onBlur={handleOnChange}/>
          </Editable> 
        </div>
    </form>
  );
}

export default Info;
