import React from 'react';
import './style.css';


function EmpTable({emp}){

  return(
    
    <tr key={emp.id}>
      <td>{emp.cnpj}</td>
      <td>{emp.razao_social}</td>
      <td>{emp.nome_fantasia}</td>
      <td>{emp.representante}</td>
      <td>{emp.utiliza}</td>
      <td>{emp.valor_vcm}</td>
      <td>{emp.valide}</td>
      <td>{emp.cidade}</td>
      <td>{emp.status_negociacao}</td>
      <td>{emp.observacao}</td>
      <td>({emp.ddd}) {emp.telefone}</td>
      
      
    </tr>
    
  );
}

export default EmpTable;
