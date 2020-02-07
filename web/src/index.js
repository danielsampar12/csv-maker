import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import ErrorPage from './components/PageNotFound'
import PageClientes from './components/PageClientes';
import SearchForm from './components/SearchForm';

const routs = (
  <BrowserRouter>
    <div>
         
         <Switch>
            <Route exact path="/" component={App} />
            <Route path="/clientes" component={PageClientes} />
            <Route path="/search"component={SearchForm}/>
            <Route component={ErrorPage} />
         </Switch>
      </div>
  </BrowserRouter>
);

ReactDOM.render(routs , document.getElementById('root'));


