import React, {useState, useEffect} from 'react'
import EmpFullTable from '../EmpFullTable';
import api from '../../services/api';
import './style.css';
import {Link} from 'react-router-dom';


function PageClientes(){
  const[emps, setEmps] = useState([]);

  useEffect(() => {
    async function reloadEmps(){
      const response = await api.get('/clientes');
      setEmps(response.data);
      //setUpWebSocket();
    }
    reloadEmps();
  }, []);
  
  async function loadEmps(){
    const response = await api.get('/clientes');
    setEmps(response.data)
  }

  async function handleEdit(data){
    console.log(data);
    await api.put('/clientes', data);
    loadEmps();
    
    //setEmps
  }



  return(
    <>
    <nav>
     <Link to={'/search'}>Página de pesquisa</Link>
    </nav>
    <main>
      <table id="empresas">
        <thead>
          <tr>
            <th key="cnpjHeader">CNPJ</th>
            <th key="razao_socialHeader">Razão Social</th>
            <th key="nome_fantasiaHeader">Nome fantasia</th>
            <th key="representanteHeader">Representante</th>
            <th key="responsavelHeader">Responsavel</th>
            <th key="utilizaHeader">Utiliza</th>
            <th key="valor_vcmHeader">Valor VCM</th>
            <th key="vcm_ofertadoHeader">VCM Ofertado</th>
            <th key="valor_concorrenciaHeader">Valor Concorrência</th>
            <th key="valideHeader">Valide</th>
            <th key="cidadeHeader">Cidade</th>
            <th key="ufHeader">Estado</th>
            <th key="status_negociacaoHeader">Status da Negociação</th>
            <th key="status_vendaHeader">Status da Venda</th>
            <th key="observacaoHeader">Observação</th>
            <th key="dddHeader">DDD</th>
            <th key="telefoneHeader">Telefone</th>
            <th key="usa_pefinHeader">Usa PEFIN</th>
            <th key="data_primeiro_contatoHeader">Data 1° contato</th>
            <th key="data_ultimo_contatoHeader">Data último contato</th>
            <th key="data_retornoHeader">Data retorno</th>
            <th key="bureauHeader">Bureau</th>
          </tr>
        </thead>
        <tbody>
        {emps.map((emp, index) => (
                  
                    <EmpFullTable key={index} emp={emp} onChange={handleEdit}/>
                  
              )).reverse()}
        </tbody>
      </table>
        
    </main>
    </>
  )
}

export default PageClientes;
