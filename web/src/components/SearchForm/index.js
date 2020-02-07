import React from 'react';
import {browserHistory} from 'react-router';


function SearchForm(){
  function onNavegateHome(){
    browserHistory.push('/');
  }


  return(
    <>
    <form action="">
      <h1>Você está editando o registro do CNPJ: </h1>
    </form>
    <button onClick={onNavegateHome}>Home</button>
    </>
  );
}

export default SearchForm
