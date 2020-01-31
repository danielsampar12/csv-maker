import React from 'react';
import './style.css';

function DeleteButton({emp, onClick}){ 
  async function handleClick(e){ 
    e.preventDefault()
    await onClick({
      cnpj: emp.cnpj,
      razao_social: emp.razao_social,
      valor_vcm: emp.valor_vcm,
      representante: emp.representante,
      responsavel: emp.responsavel,
      endereco: emp.endereco,
      cidade: emp.cidade,
      ddd: emp.ddd,
      telefone: emp.telefone,
    });
  }
  return(
    <button id="delete" onClick={handleClick}>Delete</button>
  );
}

export default DeleteButton;

