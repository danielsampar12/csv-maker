import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import ErrorPage from './components/PageNotFound'
import PageClientes from './components/PageClientes';
import SearchPage from './components/SearchPage';
import ReadMorePage from './components/ReadMorePage';

const routs = (
  <BrowserRouter>
    <div>
         
         <Switch>
            <Route exact path="/" component={App} />
            <Route path="/clientes" component={PageClientes} />
            <Route path="/search"component={SearchPage}/>
            <Route path="/searchByCNPJ"component={ReadMorePage}/>
            <Route component={ErrorPage} />
         </Switch>
      </div>
  </BrowserRouter>
);

ReactDOM.render(routs , document.getElementById('root'));


