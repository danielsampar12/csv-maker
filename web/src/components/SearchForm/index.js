import React from 'react';
import {useHistory} from 'react-router';


function SearchForm(){


  function getUrlVars() {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

let campo = getUrlVars()["x"];
let cnpj = getUrlVars()["text"];



  return(
    <>
    <form action="">
  <h1>Você está editando o registro do CNPJ: {cnpj}</h1>
    </form>
    
    </>
  );
}

export default SearchForm
