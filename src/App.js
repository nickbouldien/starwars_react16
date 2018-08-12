import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import About from './routes/About';
import CustomAttributes from './routes/CustomAttributes';
import DemonstrateErrorBoundaries from './routes/DemonstrateErrorBoundaries';
import Home from './routes/Home';
import Portal from './routes/Portal';
import ReturnArray from './routes/ReturnArray';
import Test from './routes/Test';

import Header from './components/Header';

import './styles.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <div className='container'>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/portal' component={ Portal }/>
        <Route exact path='/return-array' component={ ReturnArray }/>
        <Route exact path='/error-boundary' component={ DemonstrateErrorBoundaries }/>
        <Route exact path='/custom-attributes' component={ CustomAttributes }/>

        <Route exact path='/about' component={ About }/>
        <Route exact path='/test' component={ Test }/>

        <Redirect to='/' />
      </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
