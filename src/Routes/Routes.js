import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory,Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import Instruction from '../components/Instructions/Instruction';
import Quiz from '../components/Quiz/Quiz';
import App from '../components/Home/App';

const Routes = (props) => (
  <BrowserRouter history ={props}>
  <div>
    <Route exact path='/' component= {App}/>
    <Route path='/instruction' component= {Instruction}/>
    <Route path='/quiz' component = {Quiz} />
  </div>
  </BrowserRouter>
);

export default Routes;
