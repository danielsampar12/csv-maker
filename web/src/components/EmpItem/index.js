import React from 'react';
import './style.css';

function EmpItem({ emp, onClick }){
  //eslint-disable-next-line
  async function handleClick(e){ 
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
    <li className="emp-item">
          <header>
            <div className="emp-info">
              <strong>{emp.razao_social}</strong>
              <span>CNPJ: {emp.cnpj}</span>
            </div>
          </header>
          <p>VCM: {emp.valor_vcm}</p>
          <p>Representante: {emp.representante}</p>
          <p>Responsavel: {emp.responsavel}</p>
          <p>Endereco: {emp.endereco}</p>
          <p>Cidade: {emp.cidade}</p>
          <p>{`(${emp.ddd})${emp.telefone}`}</p>
          
        </li>
  );
}

export default EmpItem;
