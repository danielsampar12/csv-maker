import React from 'react';
import './style.css';


function EmpTable({emp}){

  return(
    
    <tr key={emp.id}>
      <td>{emp.cnpj}</td>
      <td>{emp.razao_social}</td>
      <td>{emp.nome_fantasia}</td>
      <td>{emp.representante}</td>
      <td>{emp.responsavel}</td>
      <td>{emp.valor_vcm}</td>
      <td>{emp.valide}</td>
      <td>{emp.endereco}</td>
      <td>{emp.cidade}</td>
      <td>{emp.ddd}</td>
      <td>{emp.telefone}</td>
    </tr>
    
  );
}

export default EmpTable;
