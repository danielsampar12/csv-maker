import React,{useState} from 'react';
import './style.css';

function ReadMore({expand, onSubmit}){

  const[valor_concorrencia, setValorConcorrencia] = useState('');
  const[data_ultimo_contato, setDataUltimoContato] = useState('');
  const[status_venda, setStatusVenda] = useState('');

  async function handleSubmitReadMore(e){
    e.preventDefault();
    await onSubmit({
      valor_concorrencia,
      data_ultimo_contato,
      status_venda,
    });
  }

  function getMore(expand){
    if(expand){
      return <form onSubmit={handleSubmitReadMore}>
                <div  className="expanded-input">
                <label htmlFor="valor_concorrencia">Valor Concorrencia:</label>
                <input name="valor_concorrencia" id="valor_concorrencia" required value={valor_concorrencia} onChange={e => setValorConcorrencia(e.target.value)}/>
                </div>
                <div  className="expanded-input">
                <label htmlFor="data_ultimo_contato">Data Último Contato:</label>
                <input name="data_ultimo_contato" id="data_ultimo_contato" required value={data_ultimo_contato} onChange={e => setDataUltimoContato(e.target.value)}/>
                </div>
                <div  className="expanded-input">
                <label htmlFor="status_venda">Status da Venda:</label>
                <input name="status_venda" id="status_venda" required value={status_venda} onChange={e => setStatusVenda(e.target.value)}/>
                </div>
                <button type="submit">salvar readmore</button>
            </form>
    }else{
      return null;
    }
  }

  let expandedDiv = getMore(expand);

  return(
    <div id="readMore">
      {expandedDiv}
    </div>
  );
}

export default ReadMore;
